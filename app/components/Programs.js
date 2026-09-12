import Image from 'next/image';
import Link from 'next/link';
import styles from './Programs.module.css';
import { upcomingPrograms } from '../data/programs';

export default function Programs() {
  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Coming Up</span>
        </div>

        <h2 className="sectionTitle">Upcoming <em>Programs</em></h2>
        <p className="sectionSubtitle">Screenings, workshops, and conversations. Something for every kind of film lover.</p>

        <div className={styles.grid}>
          {upcomingPrograms.map((p) => (
            <Link href={`/programs/${p.slug}`} key={p.slug} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 300px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.cardImageOverlay}></div>
                  <div className={styles.date}>
                    <span className={styles.dateDay}>{p.day}</span>
                    <span className={styles.dateMonth}>{p.month}</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <span className={`${styles.tag} ${styles[`tag_${p.tagType}`] || ''}`}>{p.tag}</span>
                  <h3 className={styles.title}>{p.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                      {p.time}
                    </span>
                    <span className={styles.metaItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      {p.venue.split(',')[0]}
                    </span>
                  </div>
                  <p className={styles.desc}>{p.shortDesc}</p>
                  <div className={styles.actions}>
                    <span className="btn btnPrimary btnSm">Details & Register</span>
                    <span className={styles.seats}>
                      {p.seats ? `${p.seats} seats left` : p.price}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
