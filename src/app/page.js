import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      <section className="hero" aria-label="Premium restoration services hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__eyebrow">
              <span className="dot" /> Atelier • Since MMXVIII
            </div>
            <h1 className="hero__title">
              Where damaged becomes <span className="gold-text">priceless</span> again
            </h1>
            <p className="hero__subtitle">
              Master craftsmen specializing in museum-grade restoration for premium leather goods, 
              footwear, and cherished accessories. We breathe new life into your most treasured pieces 
              with precision color matching, expert stitching, and finishes that stand the test of time.
            </p>
            <div className="hero__meta">
              <span className="badge">Hand‑crafted</span>
              <span className="badge">Color‑matched</span>
              <span className="badge">Boutique‑trusted</span>
              <span className="badge">Heritage‑quality</span>
            </div>
            <div className="hero__cta">
              <a className="btn btn--gold" href="#contact">Get restoration quote</a>
              <a className="btn btn--ghost" href="#services">Explore services</a>
            </div>
          </div>

          <div className="hero__gallery" aria-hidden="true">
            <figure className="frame frame--portrait">
              <img
                src="/pexels-august-de-richelieu-4427712.jpg"
                alt="Restored premium leather shoes with golden accents"
                loading="eager"
                decoding="async"
              />
            </figure>
            <figure className="frame frame--square">
              <img
                src="/pexels-746807869-18576107.jpg"
                alt="Before and after restoration showcase"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="frame frame--landscape">
              <img
                src="/pexels-castorlystock-3682292.jpg"
                alt="Master craftsman working on leather restoration"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>Leather restoration</span>
            <span>•</span>
            <span>Suede revival</span>
            <span>•</span>
            <span>Color matching</span>
            <span>•</span>
            <span>Expert stitching</span>
            <span>•</span>
            <span>Deep cleaning</span>
            <span>•</span>
            <span>Edge finishing</span>
            <span>•</span>
            <span>Luxury soles</span>
            <span>•</span>
            <span>Premium care</span>
            <span>•</span>
          </div>
        </div>
      </section>
    </main>
  );
}
