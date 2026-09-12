import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { upcomingPrograms } from '../../data/programs';
import styles from './page.module.css';

export function generateStaticParams() {
  return upcomingPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = upcomingPrograms.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: `${program.title} — Guftugu Collective`,
    description: program.shortDesc,
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = upcomingPrograms.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <div className="grain"></div>
      <div className={styles.page}>
        <Link href="/#programs" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          All Programs
        </Link>

        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={program.image}
              alt={program.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <span className={`${styles.tag} ${styles[`tag_${program.tagType}`] || ''}`}>{program.tag}</span>
            <h1 className={styles.title}>{program.title}</h1>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {program.day} {program.month} {program.year}
              </div>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                {program.time}
              </div>
              <div className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {program.venue}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.description}>
              {program.fullDesc.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {program.discussion && (
              <div className={styles.discussionNote}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                <p>{program.discussion}</p>
              </div>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.registerCard}>
              <h3 className={styles.registerTitle}>Register</h3>
              <div className={styles.registerDetail}>
                <span className={styles.registerLabel}>Price</span>
                <span className={styles.registerValue}>{program.price}</span>
              </div>
              {program.seats && (
                <div className={styles.registerDetail}>
                  <span className={styles.registerLabel}>Seats available</span>
                  <span className={styles.registerValue}>{program.seats} of {program.totalSeats}</span>
                </div>
              )}
              <form className={styles.registerForm}>
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone (optional)" />
                <button type="submit" className="btn btnPrimary btnFull">Reserve My Spot</button>
              </form>
              <p className={styles.registerNote}>You{"'"}ll receive a confirmation email with all the details.</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
