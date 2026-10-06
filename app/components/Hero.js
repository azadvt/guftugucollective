'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const heroPhotos = [
  '/images/programs/guftugu-film-festival/d3658d15-ea71-44ac-9d5b-f22c8c99cf80.jpeg',
  '/images/programs/guftugu-art-exhibition/960a676c-753d-48a7-85c5-5b1e6481bfe5.jpeg',
  '/images/programs/john-abraham-film-fest/10b82ec5-2847-428b-9aba-126429bc671f.jpeg',
  '/images/programs/la-resistance/34b9427f-a3eb-4a81-b6fc-5937ffa40120.jpeg',
  '/images/programs/solidarity-protest-anagha-sasi/30c54a79-dd39-4433-81cd-4e7afc30eec3.jpeg',
  '/images/programs/guftugu-one-day-festival/3f3e9b9e-673b-4a7b-b28d-f216d0b4d434.jpeg',
  '/images/programs/iffk-pamphlet-distribution/e2035f5c-c40d-4d9c-900f-c8b4ebcef2e2.jpeg',
];

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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (topRef.current) topRef.current.innerHTML = buildTickerHTML(words, 8, styles);
    if (bottomRef.current) bottomRef.current.innerHTML = buildTickerHTML([...words].reverse(), 8, styles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroPhotos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgCarousel}>
        {heroPhotos.map((src, i) => (
          <div
            key={src}
            className={`${styles.bgSlide} ${i === current ? styles.bgSlideActive : ''}`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className={styles.bgOverlay}></div>
      </div>

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

        <p className={styles.tagline}>Art as Expression, Resistance, and Collective Imagination.</p>

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
