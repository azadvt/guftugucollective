'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.target;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      reason: form.elements.reason.value,
      message: form.elements.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className="sectionLabel">
              <span className="labelLine"></span>
              <span className="labelText">Get In Touch</span>
            </div>
            <h2 className="sectionTitle">Come <em>talk to us</em></h2>
            <p className={styles.text}>
              Want to attend a screening? Collaborate on a project? Got a short film you want us to see? Or just want to argue about whether Tarkovsky is overrated? We{"'"}re based in Kozhikode, but the conversation is open to everyone.
            </p>

            <div className={styles.details}>
              <a href="https://www.instagram.com/guftugu_collective/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                @guftugu_collective
              </a>
              <a href="https://www.youtube.com/@guftugu.collective" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" /></svg>
                Guftugu on YouTube
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className={styles.success}>
                <p className={styles.successTitle}>Message sent.</p>
                <p className={styles.successText}>We{"'"}ll get back to you soon, usually within a couple of days. If it{"'"}s urgent, DM us on Instagram.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Your name" aria-label="Your name" required />
                <input name="email" type="email" placeholder="Email" aria-label="Email address" required />
                <select name="reason" defaultValue="" aria-label="Reason for contact" required>
                  <option value="" disabled>What brings you here?</option>
                  <option value="Attend a screening">I want to attend a screening</option>
                  <option value="Host a screening">I want to host a screening in my city</option>
                  <option value="Film submission">I have a film I{"'"}d like to submit</option>
                  <option value="Collaboration">Let{"'"}s collaborate on something</option>
                  <option value="Volunteer">I want to volunteer</option>
                  <option value="Other">Something else entirely</option>
                </select>
                <textarea name="message" placeholder="Tell us more..." aria-label="Your message" rows={5}></textarea>
                {error && <p className={styles.errorText}>Something went wrong. Try again or DM us on Instagram.</p>}
                <button type="submit" className="btn btnPrimary btnFull" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
