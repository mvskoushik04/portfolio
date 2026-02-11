import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styling/Navbar.module.css";
import clubLogo from "../assets/profile.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={styles.navbar}>
        <Link to="/">
            <img src={clubLogo} alt="Club Logo" className={styles.logo} />
        </Link>

        <Link to="/">Introduction</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/chatbot">ChatBot</Link>
      </nav>

      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <Link to="/">
            <img src={clubLogo} alt="logo" className={styles.mobileLogo} />
        </Link>
        <div className={styles.hamburger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeBtn} onClick={() => setOpen(false)}>
            ✕
          </div>

          <img src={clubLogo} alt="logo" />

          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
          <Link to="/certifications" onClick={() => setOpen(false)}>Certifications</Link>
          <Link to="/Projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/chatbot" onClick={() => setOpen(false)}>ChatBot</Link>
          
        </div>
      )}
    </>
  );
};

export default Navbar;
