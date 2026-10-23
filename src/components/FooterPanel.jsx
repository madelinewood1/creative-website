import { FOOTER } from '../data/chapters.js';
import Divider from './Divider.jsx';

/** Chapter V. The copy resolves into a footer that rises over the terrace. */
export default function FooterPanel({ data, active, onGo }) {
  return (
    <section className={`ch ch--footer${active ? ' ch--in' : ''}`}>
      <div className="ch__inner">
        <p className="ch__eyebrow">{data.eyebrow}</p>
        <h2 className="ch__title">
          {data.title.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h2>
        <Divider />
        <p className="ch__body">{FOOTER.note}</p>
      </div>

      <div className="foot">
        <div className="foot__cols">
          {FOOTER.columns.map((col) => (
            <div key={col.h} className="foot__col">
              <h3>{col.h}</h3>
              {col.items.map((it) => (
                <p key={it}>{it}</p>
              ))}
            </div>
          ))}
          <div className="foot__col foot__col--cta">
            <a className="btn btn--gold" href="https://www.r1defairfield.com" target="_blank" rel="noreferrer">{FOOTER.cta}</a>
            <button className="btn btn--ghost" onClick={() => onGo(0)}>
              Back to the studio
            </button>
          </div>
        </div>
        <div className="official-links"><a href="https://www.r1defairfield.com/general-5-1" target="_blank" rel="noreferrer">Official schedule</a><a href="https://www.r1defairfield.com/packages" target="_blank" rel="noreferrer">Memberships & pricing</a><a href="https://www.r1defairfield.com/the-team" target="_blank" rel="noreferrer">Meet the coaches</a></div>
        <div className="foot__base">
          <span>R1DE Fairfield · Educational concept</span>
          <span className="social-links"><a href="https://www.instagram.com/r1de.fairfield/?hl=en" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@r1defairfield" target="_blank" rel="noreferrer">TikTok</a></span>
        </div>
      </div>
    </section>
  );
}
