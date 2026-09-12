'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { featuredPrograms } from '../data/featured';
import styles from './FeaturedPrograms.module.css';

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lbClose} onClick={onClose} aria-label="Close">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>
      <button className={styles.lbPrev} onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <div className={styles.lbImage} onClick={(e) => e.stopPropagation()}>
        <Image
          src={photos[index]}
          alt={`Photo ${index + 1}`}
          fill
          sizes="90vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <button className={styles.lbNext} onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>
      <span className={styles.lbCount}>{index + 1} / {photos.length}</span>
    </div>
  );
}

function ProgramBlock({ program, reversed }) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const photos = program.photos;

  const openLb = (i) => { setLbIndex(i); setLbOpen(true); };
  const goPrev = () => setLbIndex((p) => (p === 0 ? photos.length - 1 : p - 1));
  const goNext = () => setLbIndex((p) => (p === photos.length - 1 ? 0 : p + 1));

  return (
    <article className={styles.block}>
      <div className={`${styles.blockInner} ${reversed ? styles.reversed : ''}`}>
        {/* Info side */}
        <div className={styles.info}>
          {program.theme && <span className={styles.theme}>{program.theme}</span>}
          <h3 className={styles.title}>{program.title}</h3>
          {program.subtitle && <p className={styles.subtitle}>{program.subtitle}</p>}
          <div className={styles.meta}>
            {program.date && (
              <span className={styles.metaItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {program.date}
              </span>
            )}
            {program.venue && (
              <span className={styles.metaItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {program.venue}
              </span>
            )}
          </div>
          {program.desc && <p className={styles.desc}>{program.desc}</p>}
          <span className={styles.photoCount}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
            {photos.length} photos
          </span>
        </div>

        {/* Hero image — first photo large */}
        <div className={styles.heroImage} onClick={() => openLb(0)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(0); }}} role="button" tabIndex={0}>
          <Image
            src={photos[0]}
            alt={`${program.title} - featured`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
      </div>

      {/* Photo grid — remaining photos */}
      <div className={styles.photoGrid}>
        {photos.slice(1).map((photo, i) => (
          <div
            key={i}
            className={styles.photoCell}
            onClick={() => openLb(i + 1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i + 1); }}}
            role="button"
            tabIndex={0}
          >
            <Image
              src={photo}
              alt={`${program.title} - photo ${i + 2}`}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cellOverlay}></div>
          </div>
        ))}
      </div>

      {lbOpen && (
        <Lightbox photos={photos} index={lbIndex} onClose={() => setLbOpen(false)} onPrev={goPrev} onNext={goNext} />
      )}
    </article>
  );
}

export default function FeaturedPrograms() {
  return (
    <section className="section" id="archive">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">What We{"'"}ve Done</span>
        </div>

        <h2 className="sectionTitle">Past <em>Programs</em></h2>
        <p className="sectionSubtitle">Events, exhibitions, and screenings we{"'"}ve hosted. The work that brought us here.</p>

        <div className={styles.programs}>
          {featuredPrograms.map((program, i) => (
            <ProgramBlock key={program.id} program={program} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
