import Image from 'next/image';
import styles from './Archive.module.css';
import { pastPrograms } from '../data/programs';

export default function Archive() {
  return (
    <section className="section" id="archive">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Look Back</span>
        </div>

        <h2 className="sectionTitle">Past <em>Programs</em></h2>
        <p className="sectionSubtitle">Things we{"'"}ve done. People we{"'"}ve met. Films that stayed with us.</p>

        <div className={styles.grid}>
          {pastPrograms.map((e, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.body}>
                <span className={styles.date}>{e.date}</span>
                <h3 className={styles.title}>{e.title}</h3>
                <p className={styles.location}>{e.location}</p>
                <p className={styles.desc}>{e.desc}</p>
                <span className={styles.attendees}>{e.attendees} attended</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
