'use client';

import { useState } from 'react';
import styles from './Team.module.css';

export default function Team() {
  const [open, setOpen] = useState(false);

  return (
    <section className={`section ${styles.team}`} id="team">
      <div className="container">
        <button className={styles.toggle} onClick={() => setOpen(!open)}>
          <span>The People Behind Guftugu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={open ? styles.chevronOpen : ''}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div className={styles.content}>
            <p className={styles.regNo}>Registered under Kerala Societies Registration Act, 2025 | Reg. No. KKD/229/2026</p>

            <div className={styles.officeBearers}>
              <div className={styles.bearer}>
                <span className={styles.bearerRole}>President</span>
                <span className={styles.bearerName}>Allan Shuaib</span>
              </div>
              <div className={styles.bearer}>
                <span className={styles.bearerRole}>Secretary</span>
                <span className={styles.bearerName}>Arshaq P</span>
              </div>
              <div className={styles.bearer}>
                <span className={styles.bearerRole}>Treasurer</span>
                <span className={styles.bearerName}>Thwaha Fasal</span>
              </div>
            </div>

            <div className={styles.execSection}>
              <span className={styles.execLabel}>Executive Members</span>
              <div className={styles.execGrid}>
                {[
                  'Ameen PV', 'Zahraf C K', 'Unais PK', 'Rubna P R',
                  'Nada', 'Fahad', 'Sreenath A', 'Ashfaaq EJ',
                  'Shameem Ali', 'Samar Aman', 'Aflah Al Zaman', 'Muhammad Rizwan',
                  'Sanu Hadeeba', 'Adv. Saleek CA', 'Adv. Sufaija', 'Studhi V',
                  'Abu Junaid', 'Muhsin Muneer',
                ].map((name) => (
                  <span key={name} className={styles.execName}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
