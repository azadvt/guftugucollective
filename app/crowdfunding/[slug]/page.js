import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { crowdfundingProjects } from '../../data/programs';
import styles from './page.module.css';

function formatCurrency(num) {
  return '\u20B9' + num.toLocaleString('en-IN');
}

export function generateStaticParams() {
  return crowdfundingProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = crowdfundingProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Support on Guftugu Collective`,
    description: project.shortDesc,
  };
}

export default async function CrowdfundingPage({ params }) {
  const { slug } = await params;
  const project = crowdfundingProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const percent = Math.round(project.raised / project.goal * 100);

  return (
    <>
      <div className="grain"></div>
      <div className={styles.page}>
        <Link href="/#crowdfunding" className={styles.back}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          All Projects
        </Link>

        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.badge}>{project.type}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.director}>A film by {project.director}</p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.description}>
              {project.fullDesc.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {project.updates && project.updates.length > 0 && (
              <div className={styles.updates}>
                <h3 className={styles.updatesTitle}>Project Updates</h3>
                {project.updates.map((u, i) => (
                  <div key={i} className={styles.update}>
                    <span className={styles.updateDate}>{u.date}</span>
                    <p className={styles.updateText}>{u.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.fundCard}>
              <div className={styles.progressSection}>
                <div className={styles.amountRaised}>{formatCurrency(project.raised)}</div>
                <p className={styles.goalText}>raised of {formatCurrency(project.goal)} goal</p>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${percent}%` }}></div>
                </div>
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{percent}%</span>
                    <span className={styles.statLabel}>funded</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{project.backers}</span>
                    <span className={styles.statLabel}>backers</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{project.daysLeft}</span>
                    <span className={styles.statLabel}>days left</span>
                  </div>
                </div>
              </div>

              <div className={styles.tiers}>
                <h4 className={styles.tiersTitle}>Support this project</h4>
                <div className={styles.tier}>
                  <span className={styles.tierAmount}>{'\u20B9'}500</span>
                  <span className={styles.tierName}>Friend of the Film</span>
                  <p className={styles.tierDesc}>Your name in the credits + a digital thank-you postcard from the team.</p>
                </div>
                <div className={styles.tier}>
                  <span className={styles.tierAmount}>{'\u20B9'}2,000</span>
                  <span className={styles.tierName}>Patron</span>
                  <p className={styles.tierDesc}>Credits + exclusive behind-the-scenes photo set + early access to the film before public release.</p>
                </div>
                <div className={styles.tier}>
                  <span className={styles.tierAmount}>{'\u20B9'}5,000</span>
                  <span className={styles.tierName}>Producer Circle</span>
                  <p className={styles.tierDesc}>All above + Associate Producer credit + invitation to the premiere screening.</p>
                </div>
                <button className="btn btnPrimary btnFull">Support This Film</button>
              </div>

              <p className={styles.fundNote}>All contributions are handled securely. If the project doesn{"'"}t reach its goal, you{"'"}ll be refunded in full.</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
