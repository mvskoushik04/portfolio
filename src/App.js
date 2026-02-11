import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Introduction from './pages/Introduction.jsx';
import Navbar from './pages/Navbar.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Certifications from './pages/Certifications.jsx';
import ChatBot from './pages/ChatBot.jsx';
import Projects from './pages/Projects.jsx';
const App =() =>{
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/chatbot' element={<ChatBot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;