'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoText}>guftugu</span>
            <span className={styles.logoSub}>collective</span>
          </a>

          <ul className={styles.links}>
            <li><a href="#about">About</a></li>
            <li><a href="#archive">Programs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className={styles.cta}>Join Us</a>

          <button
            className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#archive" onClick={closeMenu}>Programs</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
