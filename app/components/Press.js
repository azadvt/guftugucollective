import styles from './Press.module.css';

const pressLinks = [
  {
    title: 'From Gaza to Kagaar: Guftugu Film Festival 2026 Discusses the Nuanced Politics of Genocide',
    source: 'Asianet News',
    url: 'https://www.asianetnews.com/entertainment-news/guftugu-film-festival-2026-articleshow-c1duuqs',
  },
  {
    title: 'Guftugu Film Festival Discusses the Nuanced Politics of Genocide',
    source: 'MediaOne',
    url: 'https://www.mediaoneonline.com/kerala/guftugu-film-festival-314772',
  },
  {
    title: 'Guftugu Film Festival Coverage',
    source: 'Madhyamam',
    url: 'https://www.madhyamam.com/n-1493682',
  },
  {
    title: 'John Abraham Film Festival — Guftugu Collective\'s Film Festival a Grand Success',
    source: 'Asianet News',
    url: 'https://www.asianetnews.com/entertainment-news/john-abraham-from-odessa-to-cannes-one-day-film-festival-conducted-by-guftugu-collective-m-n-vijayan-cultural-center-articleshow-ad5ul9w',
  },
  {
    title: 'One-Day Film Festival Organized in Memory of John Abraham',
    source: 'Madhyamam',
    url: 'https://www.madhyamam.com/n-1536349',
  },
  {
    title: 'Solidarity Protest Organized in Support of Anagha Sasi',
    source: 'Madhyamam',
    url: 'https://www.madhyamam.com/kerala/local-news/kozhikode/a-protest-gathering-was-organized-to-express-solidarity-with-anagha-shashis-protest-1551906',
  },
  {
    title: 'Guftugu Film Festival Report',
    source: 'YouTube',
    type: 'video',
    url: 'https://youtu.be/UD2ZweEJ4S0?si=uAB6mOQNkqx1wVYV',
  },
];

export default function Press() {
  return (
    <section className={`section ${styles.press}`} id="press">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">In The Press</span>
        </div>

        <h2 className="sectionTitle">Guftugu in the <em>News</em></h2>

        <div className={styles.grid}>
          {pressLinks.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.source}>{item.source}</span>
                {item.type === 'video' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                )}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <span className={styles.readMore}>
                {item.type === 'video' ? 'Watch' : 'Read article'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
