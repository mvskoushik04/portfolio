import React from "react";
import styles from "../styling/Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Real-Time Student Data Analysis",
    date: "January 2025",
    description:
      "Automated end-to-end pipeline with live dashboards for student performance insights and reporting.",
    bullets: [
      "Streamed data into AWS RDS and visualised with Power BI.",
      "Built REST APIs with Node.js and Express for secure access.",
    ],
    tags: ["Node.js", "Express", "MySQL", "Power BI", "AWS"],
    link: "https://medium.com/@medurivskoushik/how-i-built-a-real-time-data-analytics-dashboard-with-html-node-js-6c7c4a1b5acb",
  },
  {
    id: 2,
    title: "AI-Powered Website Chatbot",
    date: "June 2025",
    description:
      "Intelligent customer support chatbot with voice interface and high intent accuracy.",
    bullets: [
      "Achieved 92% intent accuracy using Groq API and custom NLP flows.",
      "Integrated Google Speech-to-Text for voice conversations.",
    ],
    tags: ["React", "Groq API", "NLP", "Voice API"],
    link: "https://github.com/mvskoushik04/myschool_chatbot_extension",
  },
  {
    id: 3,
    title: "WSN Energy Optimization",
    date: "May 2025",
    description:
      "Hybrid MDS-MA algorithm improves wireless sensor network lifetime and energy efficiency.",
    bullets: [
      "Simulated routing strategies reducing packet drop and latency.",
      "Compared energy profiles across multiple WSN topologies.",
    ],
    tags: ["Python", "NumPy", "Pandas", "ML"],
    link: "#",
  },
  {
    id: 4,
    title: "DSA-Genie Chrome Extension",
    date: "May 2025",
    description:
      "Browser assistant providing real-time explanations and pseudocode for coding problems.",
    bullets: [
      "Used Groq API for on-page explanations and hints.",
      "Added secure bookmarking and YouTube recommendation features.",
    ],
    tags: ["React", "Vite", "Flask", "Chrome API"],
    link: "https://medium.com/@medurivskoushik/building-an-llm-powered-chatbot-extension-architecture-tech-stack-workflow-c43f8cc483d4",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Featured Projects</h1>
          <p className={styles.subtitle}>
            Selected work spanning analytics, AI and developer tooling.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.cardMain}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <div className={styles.dateBadge}>
                    <span className={styles.dateIcon}>📅</span>
                    <span className={styles.dateText}>{project.date}</span>
                  </div>
                </div>

                <p className={styles.description}>{project.description}</p>

                <ul className={styles.bullets}>
                  {project.bullets.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.iconButton}
              >
                <span className={styles.arrow}>&#8594;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

