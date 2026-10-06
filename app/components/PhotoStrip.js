'use client';

import Image from 'next/image';
import styles from './PhotoStrip.module.css';

const photos = [
  { src: '/images/programs/guftugu-film-festival/d3658d15-ea71-44ac-9d5b-f22c8c99cf80.jpeg', program: 'guftugu-film-festival', label: 'Guftugu Film Festival' },
  { src: '/images/programs/la-resistance/34b9427f-a3eb-4a81-b6fc-5937ffa40120.jpeg', program: 'la-resistance', label: 'La Résistance' },
  { src: '/images/programs/guftugu-art-exhibition/261aa1cd-9013-4ccc-9a63-7b84a561f5bc.jpeg', program: 'guftugu-art-exhibition', label: 'Art Exhibition' },
  { src: '/images/programs/solidarity-protest-anagha-sasi/30c54a79-dd39-4433-81cd-4e7afc30eec3.jpeg', program: 'solidarity-protest-anagha-sasi', label: 'Solidarity Protest' },
  { src: '/images/programs/guftugu-one-day-festival/3f3e9b9e-673b-4a7b-b28d-f216d0b4d434.jpeg', program: 'guftugu-one-day-festival', label: 'Political Prisoners' },
  { src: '/images/programs/iffk-pamphlet-distribution/e2035f5c-c40d-4d9c-900f-c8b4ebcef2e2.jpeg', program: 'iffk-pamphlet-distribution', label: 'IFFK Pamphlet Distribution' },
  { src: '/images/programs/john-abraham-film-fest/10b82ec5-2847-428b-9aba-126429bc671f.jpeg', program: 'john-abraham-film-fest', label: 'John Abraham Film Fest' },
  { src: '/images/programs/guftugu-art-exhibition/960a676c-753d-48a7-85c5-5b1e6481bfe5.jpeg', program: 'guftugu-art-exhibition', label: 'Art Exhibition' },
  { src: '/images/programs/la-resistance/236de3c7-494c-437e-a0d0-95084d8580dd.jpeg', program: 'la-resistance', label: 'La Résistance' },
  { src: '/images/programs/guftugu-film-festival/04c2195b-3eab-41bf-9c51-b7272e52059f.jpeg', program: 'guftugu-film-festival', label: 'Guftugu Film Festival' },
  { src: '/images/programs/solidarity-protest-anagha-sasi/c6b3e034-312f-43d8-9142-de851925b58e.jpeg', program: 'solidarity-protest-anagha-sasi', label: 'Solidarity Protest' },
  { src: '/images/programs/iffk-pamphlet-distribution/94aae605-7d4d-4171-9d2c-a870694cd44a.jpeg', program: 'iffk-pamphlet-distribution', label: 'IFFK Pamphlet Distribution' },
];

function handleClick(programId) {
  const archiveSection = document.getElementById('archive');
  if (archiveSection) {
    archiveSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openProgram', { detail: programId }));
    }, 600);
  }
}

export default function PhotoStrip() {
  const doubled = [...photos, ...photos];

  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className={styles.frame}
            onClick={() => handleClick(item.program)}
            title={item.label}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="280px"
              style={{ objectFit: 'cover' }}
            />
            <span className={styles.frameLabel}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
