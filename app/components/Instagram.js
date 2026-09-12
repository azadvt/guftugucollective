import styles from './Instagram.module.css';

export default function Instagram() {
  return (
    <section className={`section ${styles.social}`} id="social">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Follow Along</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.channel}>
            <a href="https://www.instagram.com/guftugu_collective/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              <span>@guftugu_collective</span>
            </a>
            <div className={styles.embed}>
              <iframe
                src="https://www.instagram.com/guftugu_collective/embed"
                title="Guftugu Collective Instagram"
                scrolling="no"
              ></iframe>
            </div>
          </div>

          <div className={styles.channel}>
            <a href="https://www.youtube.com/@guftugu.collective" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" /></svg>
              <span>@guftugu.collective</span>
            </a>
            <div className={styles.embed}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UUFBPXj55IR_REc-wHV8Xbgw"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Guftugu Collective YouTube"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
