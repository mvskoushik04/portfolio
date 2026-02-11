import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styling/Home.module.css";
import profileImage from "../assets/profile.jpg"; // Add your profile image
import resumePdf from "../assets/Meduri_Venkata_Sri_Koushik_Resume.pdf";
import resumedownload from "../assets/document.png";

const Introduction = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          {/* Mobile top area: centered welcome + name + description + buttons (fills viewport) */}
          <div className={styles.mobileTop}>
            <div>
              <p className={styles.greeting}>HI, I'M</p>
              <h1 className={styles.name}>Meduri Venkata Sri Koushik</h1>
            </div>

            {/* Description above buttons */}
            <p className={styles.description}>
              "Full-stack MERN developer with AI/ML experience, building scalable web apps and intelligent systems."
            </p>

            {/* Action Buttons (centered horizontally) */}
            <div className={styles.buttonGroup}>
              <a href="https://www.linkedin.com/in/mvs-koushik-67b79b26a/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" className={styles.btnIcon} />
                LinkedIn
              </a>
              <a href="https://github.com/mvskoushik04" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                <img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="Github" className={styles.btnIcon} />
                Github
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                <img src={resumedownload} alt="Resume" className={styles.btnIcon} />
                Resume
              </a>
            </div>
          </div>

          {/* Skills Cards: stacked square boxes */}
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillTitle}>SKILLS</div>
              <div className={styles.skillContent}>
                • React.js
                • Node.js <br />
                • MongoDB  • MySQL <br />
                • Python •Java <br />
                • Power BI
                • AWS 
              </div>
            </div>
            <div
              className={styles.skillCard}
              onClick={() => navigate("/experience")}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.skillTitle}>EXPERIENCE</div>
              <div className={styles.skillContent}>
                Software Developer Intern at ExpertAid Technologies Pvt. Ltd.<br />
              </div>
            </div>
            
            <div
              className={styles.skillCard}
              onClick={() => navigate("/certifications")}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.skillTitle}>CERTIFICATIONS</div>
              <div className={styles.skillContent}>
                ORACLE OCI Associate<br />
                POSTMAN Certified<br />
                DATA SCIENCE
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className={styles.rightSection}>
          <img 
            src={profileImage} 
            alt="Profile" 
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;