import styles from './Team.module.css';

export default function Team() {
  return (
    <section className={`section ${styles.team}`} id="team">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Our People</span>
        </div>

        <h2 className="sectionTitle">The People Behind <em>Guftugu</em></h2>
        <p className={styles.regNo}>Registered under Kerala Societies Registration Act, 2025 — Reg. No. KKD/229/2026</p>

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
    </section>
  );
}
