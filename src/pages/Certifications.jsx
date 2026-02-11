import React from "react";
import styles from "../styling/Certifications.module.css";

const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)",
    issuer: "Oracle",
    //issuerUrl: "",
    description: "Explored an Associate level knowledge in Oracle Services.",
    iconLabel: "OC",
    certificateUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A4C9C51D85516BF1494C301D44377DE210FD90D5800CC65BA1BF04640217B72A",
  },
  {
    id: 2,
    title: "Data Science using Python Certified",
    issuer: "Edureka",
    //issuerUrl: "#",
    description:
      "Completed 15+ hands-on ML assignments with end-to-end implementations.",
    iconLabel: "DS",
    certificateUrl: "https://www.edureka.co/lms/certificate/3c04d144332a571deeabae7166f9288b",
  },
  {
    id: 3,
    title: "LeetCode Profile",
    issuer: "100+ Problems Solved",
    //issuerUrl: "#",
    description:
      "Strengthened problem-solving using Python, well-versed in SQL queries.",
    iconLabel: "LC",
    certificateUrl: "https://leetcode.com/u/Fb6KOfW61B/",
  },
  {
    id: 4,
    title: "SDG 4 Coordinator",
    issuer: "Sustainable Development Goals",
    //issuerUrl: "#",
    description:
      "Student coordinator for Quality Education focusing on targets 4.1 and 4.2.",
    iconLabel: "SDG",
    certificateUrl: "",
  },
  {
    id: 5,
    title: "Video Editing & Photography Lead",
    issuer: "Sirivennela TLA, VIT Chennai",
    //issuerUrl: "#",
    description:
      "Content head with 600k+ combined views across platforms.",
    iconLabel: "TLA",
    certificateUrl: "https://www.instagram.com/reel/DGfN0IDy-0r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    title: "Data Science Hackathon",
    issuer: "VIT Chennai",
    //issuerUrl: "#",
    description:
      "Secured 7th place out of 93 teams for innovative analytical solutions.",
    iconLabel: "DS",
    certificateUrl: "",
  },
];

const Certifications = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Certifications &amp; Achievements</h1>
          <p className={styles.subtitle}>
            Formal training and recognitions across data science, leadership and
            competitive achievements.
          </p>
        </div>

        <div className={styles.cards}>
          {certifications.map((cert) => (
            <article key={cert.id} className={styles.card}>
              <div className={styles.cardText}>
                <h2 className={styles.certTitle}>{cert.title}</h2>
                <a
                  href={cert.issuerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.issuer}
                >
                  {cert.issuer}
                </a>
                <p className={styles.description}>{cert.description}</p>
              </div>

              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.iconButton}
              >
                <span className={styles.iconLabel}>{cert.iconLabel}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;