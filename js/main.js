// ---- Build tickers with enough copies to fill viewport ----
const words = [
  { text: 'ಗುಷ್ಟುಗೂ', cls: 'tk-kannada' },
  { text: 'गुफ़्तगू', cls: 'tk-devanagari' },
  { text: 'குஃப்துகு', cls: 'tk-tamil' },
  { text: 'ഗുഫ്തുഗു', cls: 'tk-malayalam' },
  { text: 'گفتگو', cls: 'tk-urdu' },
  { text: 'guftugu', cls: 'tk-english' },
];

function buildTicker(el, list, copies) {
  let html = '';
  for (let i = 0; i < copies; i++) {
    for (const w of list) {
      html += `<span class="tk ${w.cls}">${w.text}</span><span class="tk-dot"></span>`;
    }
  }
  el.innerHTML = html;
}

const topEl = document.getElementById('tickerTop');
const bottomEl = document.getElementById('tickerBottom');

// 8 copies guarantees full coverage on any screen width
buildTicker(topEl, words, 8);
buildTicker(bottomEl, [...words].reverse(), 8);

// ---- Countdown — September 13, 2026 ----
const launchDate = new Date('2026-09-13T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(d).padStart(2, '0');
  document.getElementById('hours').textContent = String(h).padStart(2, '0');
  document.getElementById('minutes').textContent = String(m).padStart(2, '0');
  document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
