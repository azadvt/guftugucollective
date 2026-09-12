import styles from './About.module.css';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">Who We Are</span>
        </div>

        <div className={styles.grid}>
          <div>
            <h2 className="sectionTitle">Art beyond <em>profit</em></h2>
            <p className={styles.text}>
              Guftugu is a film society built to create a network of socially and politically grounded art. The name means conversation in Urdu, and that{"'"}s exactly what we do. We show films, we talk about them, and sometimes those conversations change how we see things.
            </p>
            <p className={styles.text}>
              Inspired by the <em>Odessa Collective</em> and <em>Amma Ariyan</em>, we{"'"}re here to make and share art that goes beyond profit and entertainment. Founded in December 2024, the collective is based in Kozhikode, the cultural heart of Kerala.
            </p>
            <p className={styles.text}>
              It started with a one-day film festival titled {'"'}Guftugu{'"'} where artists and social activists gathered from different fields. By August 2025, it had grown into something bigger, an organised, structured platform. That{"'"}s when Guftugu Collective as a film society was formally born.
            </p>
            <p className={styles.text}>
              For artistic and cultural collectives, what matters most is people{"'"}s participation and accessibility. They should not be reduced to commercial ventures or entertainment for a privileged few. These spaces must belong to everyone.
            </p>
          </div>

          <div className={styles.side}>
            <div className={styles.scripts}>
              <span className={styles.scriptItem} data-lang="Urdu">{'\u06AF\u0641\u062A\u06AF\u0648'}</span>
              <span className={styles.scriptItem} data-lang="Malayalam">{'\u0D17\u0D41\u0D2B\u0D4D\u0D24\u0D41\u0D17\u0D41'}</span>
              <span className={styles.scriptItem} data-lang="Devanagari">{'\u0917\u0941\u092B\u093C\u094D\u0924\u0917\u0942'}</span>
              <span className={styles.scriptItem} data-lang="Kannada">{'\u0C97\u0CC1\u0CB7\u0CCD\u0C9F\u0CC1\u0C97\u0CC2'}</span>
              <span className={styles.scriptItem} data-lang="Tamil">{'\u0B95\u0BC1\u0B83\u0BAA\u0BCD\u0BA4\u0BC1\u0B95\u0BC1'}</span>
              <span className={styles.scriptItem} data-lang="English">guftugu</span>
            </div>
          </div>
        </div>

        <div className={styles.numbers}>
          <div className={styles.stat}>
            <span className={styles.statNum}>2024</span>
            <span className={styles.statLabel}>Founded</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Kozhikode</span>
            <span className={styles.statLabel}>Based in Kerala</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Film</span>
            <span className={styles.statLabel}>Society & Collective</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>Open</span>
            <span className={styles.statLabel}>To everyone</span>
          </div>
        </div>


      </div>
    </section>
  );
}
