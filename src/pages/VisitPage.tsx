import { Coffee } from "lucide-react";
import { VisitDetails } from "../components/CafeSections";

export function VisitPage() {
  return (
    <main className="inner-page">
      <section className="page-intro visit-intro">
        <p className="eyebrow">The one near your apartment</p>
        <h1>
          Come <em>hang out.</em>
        </h1>
        <p>
          Drop in for coffee, stay for the conversation. There&apos;s always a
          seat waiting.
        </p>
      </section>
      <section className="visit-page-content">
        <div className="map-image">
          <span>
            90 Bedford
            <br />
            <strong>↓</strong>
          </span>
        </div>
        <VisitDetails />
      </section>
      <section className="visit-note">
        <Coffee size={23} />
        <p>
          Our coffee is best enjoyed with good company and absolutely no rush.
        </p>
      </section>
      <section className="visit-details-band">
        <p className="eyebrow">Make it a ritual</p>
        <h2>
          Same time
          <br />
          <em>next week?</em>
        </h2>
        <a className="button button-dark" href="mailto:hello@centralperk.cafe">
          Book your booth
        </a>
      </section>
    </main>
  );
}
