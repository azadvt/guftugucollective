import Image from 'next/image';
import Link from 'next/link';
import styles from './Crowdfunding.module.css';
import { crowdfundingProjects } from '../data/programs';

function formatCurrency(num) {
  return '\u20B9' + num.toLocaleString('en-IN');
}

export default function Crowdfunding() {
  return (
    <section className="section" id="crowdfunding">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Fund a Film</span>
        </div>

        <h2 className="sectionTitle">Crowdfunding <em>Projects</em></h2>
        <p className="sectionSubtitle">Independent films need independent support. Put your money where your taste is.</p>

        <div className={styles.grid}>
          {crowdfundingProjects.map((p) => (
            <Link href={`/crowdfunding/${p.slug}`} key={p.slug} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay}></div>
                  <span className={styles.badge}>{p.type}</span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.director}>by {p.director}</p>
                  <p className={styles.desc}>{p.shortDesc}</p>
                  <div className={styles.progress}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} style={{ width: `${Math.round(p.raised / p.goal * 100)}%` }}></div>
                    </div>
                    <div className={styles.progressStats}>
                      <span className={styles.raised}>{formatCurrency(p.raised)} raised</span>
                      <span className={styles.goal}>of {formatCurrency(p.goal)}</span>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.deadline}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                      {p.daysLeft} days left
                    </span>
                    <span className={styles.backerCount}>{p.backers} backers</span>
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
