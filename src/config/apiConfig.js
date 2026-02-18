/**
 * API Configuration
 * Centralized configuration for all API calls
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'development';

const API_ENDPOINTS = {
  CHAT: `${API_BASE_URL}/api/chat`,
  HEALTH: `${API_BASE_URL}/api/health`,
  CHAT_HEALTH: `${API_BASE_URL}/api/chat/health`
};

// Request configuration
const API_CONFIG = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 30000 // 30 seconds
};

/**
 * Make API request with error handling
 * @param {string} endpoint - API endpoint URL
 * @param {object} data - Request body
 * @param {object} options - Override options
 * @returns {Promise<object>} - Response from server
 */
export const makeRequest = async (endpoint, data = {}, options = {}) => {
  const config = { ...API_CONFIG, ...options };

  // Add timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), config.timeout);

  try {
    const response = await fetch(endpoint, {
      ...config,
      body: JSON.stringify(data),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    let result;

    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    if (!response.ok) {
      const error = new Error(result?.error || 'API request failed');
      error.status = response.status;
      error.data = result;
      throw error;
    }

    return result;
  } catch (error) {
    clearTimeout(timeoutId);

    // Handle different error types
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. Please try again.');
    }

    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error. Please check your connection.');
    }

    throw error;
  }
};

/**
 * Send chat message to backend
 * @param {string} message - User message
 * @returns {Promise<object>} - Chat response
 */
export const sendChatMessage = async (message) => {
  if (!message || !message.trim()) {
    throw new Error('Message cannot be empty');
  }

  return makeRequest(API_ENDPOINTS.CHAT, { message: message.trim() });
};

/**
 * Check if backend is healthy
 * @returns {Promise<object>} - Health status
 */
export const checkBackendHealth = async () => {
  try {
    return await makeRequest(API_ENDPOINTS.HEALTH, {}, { method: 'GET' });
  } catch (error) {
    console.error('Health check failed:', error);
    return { status: 'unhealthy', error: error.message };
  }
};

/**
 * Check if chat service is healthy
 * @returns {Promise<object>} - Service status
 */
export const checkChatServiceHealth = async () => {
  try {
    return await makeRequest(API_ENDPOINTS.CHAT_HEALTH, {}, { method: 'GET' });
  } catch (error) {
    console.error('Chat service health check failed:', error);
    return { status: 'unavailable', error: error.message };
  }
};

export { API_ENDPOINTS, API_BASE_URL, ENVIRONMENT };
export default { API_ENDPOINTS, sendChatMessage, checkBackendHealth, checkChatServiceHealth };
