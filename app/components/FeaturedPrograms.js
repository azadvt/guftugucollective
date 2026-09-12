'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
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

function ExpandedGallery({ program }) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const photos = program.photos;
  const visiblePhotos = showAll ? photos : photos.slice(0, 9);
  const hiddenCount = photos.length - 9;

  const openLb = (i) => { setLbIndex(i); setLbOpen(true); };
  const goPrev = () => setLbIndex((p) => (p === 0 ? photos.length - 1 : p - 1));
  const goNext = () => setLbIndex((p) => (p === photos.length - 1 ? 0 : p + 1));

  return (
    <div className={styles.expanded}>
      <div className={styles.expandedInfo}>
        <div>
          {program.theme && <span className={styles.theme}>{program.theme}</span>}
          <h3 className={styles.expandedTitle}>{program.title}</h3>
          {program.subtitle && <p className={styles.expandedSub}>{program.subtitle}</p>}
        </div>
        <div className={styles.expandedMeta}>
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
          <span className={styles.metaItem}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
            {photos.length} photos
          </span>
        </div>
        {program.desc && <p className={styles.expandedDesc}>{program.desc}</p>}
      </div>

      <div className={styles.photoGrid}>
        {visiblePhotos.map((photo, i) => (
          <div
            key={i}
            className={styles.photoCell}
            onClick={() => openLb(i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); }}}
            role="button"
            tabIndex={0}
          >
            <Image
              src={photo}
              alt={`${program.title} - photo ${i + 1}`}
              fill
              sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.cellOverlay}></div>
          </div>
        ))}
        {!showAll && hiddenCount > 0 && (
          <button className={styles.showMore} onClick={() => setShowAll(true)}>
            +{hiddenCount} more
          </button>
        )}
      </div>

      {lbOpen && (
        <Lightbox photos={photos} index={lbIndex} onClose={() => setLbOpen(false)} onPrev={goPrev} onNext={goNext} />
      )}
    </div>
  );
}

export default function FeaturedPrograms() {
  const [activeId, setActiveId] = useState(null);
  const galleryRef = useRef(null);

  const handleSelect = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    if (activeId && galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [activeId]);

  const activeProgram = featuredPrograms.find((p) => p.id === activeId);

  return (
    <section className="section" id="archive">
      <div className="container">
        <div className="sectionLabel">
          <span className="labelLine"></span>
          <span className="labelText">What We{"'"}ve Done</span>
        </div>

        <h2 className="sectionTitle">Past <em>Programs</em></h2>
        <p className="sectionSubtitle">Events, exhibitions, and screenings we{"'"}ve hosted. The work that brought us here.</p>

        <div className={styles.cardGrid}>
          {featuredPrograms.map((program) => (
            <button
              key={program.id}
              className={`${styles.card} ${activeId === program.id ? styles.cardActive : ''}`}
              onClick={() => handleSelect(program.id)}
            >
              <div className={styles.cardImage}>
                <Image
                  src={program.photos[0]}
                  alt={program.title}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCount}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                    {program.photos.length}
                  </span>
                </div>
              </div>
              <div className={styles.cardBody}>
                {program.theme && <span className={styles.cardTheme}>{program.theme}</span>}
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <span className={styles.cardDate}>{program.date}</span>
              </div>
            </button>
          ))}
        </div>

        {activeProgram && (
          <div ref={galleryRef} className={styles.gallerySection}>
            <ExpandedGallery key={activeProgram.id} program={activeProgram} />
          </div>
        )}
      </div>
    </section>
  );
}
