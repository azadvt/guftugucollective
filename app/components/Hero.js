'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const words = [
  { text: '\u0C97\u0CC1\u0CB7\u0CCD\u0C9F\u0CC1\u0C97\u0CC2', cls: 'tkKannada' },
  { text: '\u0917\u0941\u092B\u093C\u094D\u0924\u0917\u0942', cls: 'tkDevanagari' },
  { text: '\u0B95\u0BC1\u0B83\u0BAA\u0BCD\u0BA4\u0BC1\u0B95\u0BC1', cls: 'tkTamil' },
  { text: '\u0D17\u0D41\u0D2B\u0D4D\u0D24\u0D41\u0D17\u0D41', cls: 'tkMalayalam' },
  { text: '\u06AF\u0641\u062A\u06AF\u0648', cls: 'tkUrdu' },
  { text: 'guftugu', cls: 'tkEnglish' },
];

function buildTickerHTML(list, copies, s) {
  let html = '';
  for (let i = 0; i < copies; i++) {
    for (const w of list) {
      html += `<span class="${s.tk} ${s[w.cls] || ''}">${w.text}</span><span class="${s.tkDot}"></span>`;
    }
  }
  return html;
}

export default function Hero() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (topRef.current) topRef.current.innerHTML = buildTickerHTML(words, 8, styles);
    if (bottomRef.current) bottomRef.current.innerHTML = buildTickerHTML([...words].reverse(), 8, styles);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={`${styles.ticker} ${styles.tickerTop}`}>
        <div className={styles.tickerTrack} ref={topRef}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.mainTitle}>guftugu</h1>
          <p className={styles.mainSub}>collective</p>
        </div>

        <div className={styles.middleInfo}>
          <div className={styles.thinLine}></div>
          <p className={styles.filmSociety}>A Film Society</p>
        </div>

        <p className={styles.tagline}>Art Beyond Commerce. Cinema Beyond Entertainment.</p>

        <div className={styles.actions}>
          <a href="#archive" className="btn btnPrimary">Our Programs</a>
          <a href="#about" className="btn btnOutline">Our Story</a>
        </div>
      </div>

      <div className={`${styles.ticker} ${styles.tickerBottom}`}>
        <div className={styles.tickerTrackReverse} ref={bottomRef}></div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
