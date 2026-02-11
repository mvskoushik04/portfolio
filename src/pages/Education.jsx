import React from "react";
import styles from "../styling/Education.module.css";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Vellore Institute of Technology, Chennai",
      specialization: "Specialization: AI & Robotics",
      cgpa: "7.44",
      metric: "7.37",
      graduationDate: "Jun 2026",
      metricType: "CGPA"
    },
    {
      degree: "Intermediate Education – Sciences",
      institution: "Gauthami Junior College, Hyderabad",
      specialization: "Specialization: Maths, Physics & Chemistry",
      percentage: "93.9",
      metric: "93.9",
      metricType: "PERCENTAGE",
      graduationDate: "June 2022",
      graduationLabel: "GRADUATED"
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Sri Chaitanya Techno School, Hyderabad",
      specialization: "Telangana State Board of Secondary Education",
      cgpa: "10",
      metric: "10",
      metricType: "CGPA",
      graduationDate: "April 2020",
      graduationLabel: "GRADUATED"
    }
  ];

  return (
    <div className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Education</h1>
          <p className={styles.subtitle}>Academic journey from 10th grade through undergraduate studies.</p>
        </div>

        <div className={styles.educationList}>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.specialization}>{edu.specialization}</p>
              </div>

              <div className={styles.cardMeta}>
                <div className={styles.metricContainer}>
                  <p className={styles.metricLabel}>{edu.metricType}</p>
                  <p className={styles.metricValue}>{edu.metric}</p>
                </div>
                <div className={styles.metricContainer}>
                  <p className={styles.metricLabel}>{edu.graduationLabel || "GRADUATING"}</p>
                  <p className={styles.metricValue}>{edu.graduationDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;