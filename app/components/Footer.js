import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>guftugu</span>
            <span className={styles.logoSub}>collective</span>
            <p className={styles.tagline}>Art Beyond Commerce. Kozhikode, Kerala.</p>
          </div>
          <div className={styles.linksCol}>
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#archive">Programs</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.linksCol}>
            <h4>Follow</h4>
            <a href="https://www.instagram.com/guftugu_collective/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@guftugu.collective" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>Registered under Kerala Societies Registration Act, 2025 | Reg. No. KKD/229/2026</span>
          <span>&copy; 2026 Guftugu Collective. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
