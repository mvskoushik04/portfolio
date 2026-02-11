import React from "react";
import styles from "../styling/Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "ExpertAid Technologies Pvt. Ltd.",
      status: "COMPLETED",
      location: "Hyderabad • Hybrid",
      dates: "May 2025 – July 2025",
      description: "Built AI-powered website chatbot and worked across ERP modules focusing on reliability, user experience and business impact.",
      highlights: [
        "Developed chatbot features that reduced customer query calls by 30%.",
        "Improved intent classification accuracy to 92% using refined NLP pipelines.",
        "Collaborated across SDLC: requirements, implementation, testing and bug fixing."
      ],
      skills: ["React.js", "Node.js", "Groq API", "NLP"],
      icon: "💼"
    },
    {
      title: "Android Development Training",
      company: "Imarticus Learning",
      status: "COMPLETED",
      location: "Online",
      dates: "May 2024 – July 2024",
      description: "Learned Android Development fundamentals and built practice applications with modern development techniques.",
      highlights: [
        "Hands-on experience with Android Studio, Java/Kotlin, XML layouts and Material Design.",
        "Built responsive UIs and integrated REST APIs in multiple projects.",
        "Developed with Activities, Fragments, RecyclerView and SQLite."
      ],
      skills: ["Android Studio", "Java", "Kotlin", "REST APIs"],
      icon: "📱"
    }
  ];

  return (
    <div className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Work Experience</h1>
          <p className={styles.subtitle}>Hands-on roles in Software Development, AI/ML and web technologies.</p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.statusBadge}>{exp.status}</div>
                </div>

                <p className={styles.dates}>{exp.dates}</p>

                <p className={styles.cardDescription}>{exp.description}</p>

                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>

                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardMeta}>
                <p className={styles.location}>{exp.location}</p>
                <div className={styles.iconBadge}>{exp.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;