import {
  ArrowRight,
  CalendarDays,
  Coffee,
  Heart,
  Music2,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { menuItems } from "../data/menu";
import type { MenuItem } from "../data/menu";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">The one with the coffee</p>
        <h1>
          Good coffee.
          <br />
          <em>Great friends.</em>
        </h1>
        <p className="hero-description">
          Your favourite New York coffeehouse, right around the corner. Come for
          the coffee, stay because nobody wants to leave.
        </p>
        <div className="hero-actions">
          <Link className="button button-dark" to="/menu">
            See what's brewing <ArrowRight size={17} />
          </Link>
          <Link className="text-link" to="/story">
            Our story <span>↗</span>
          </Link>
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label="A cozy coffeehouse table with coffee and pastries"
      >
        <div className="sun-shape"></div>
        <div className="hero-photo"></div>
        <div className="sticker">
          How you
          <br />
          <strong>doin'?</strong>
        </div>
        <div className="coffee-note">
          <Coffee size={17} />
          <span>
            Freshly brewed
            <br />
            <strong>all day long</strong>
          </span>
        </div>
      </div>
      <div className="scroll-cue">
        <span></span> scroll to explore
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <div className={`food-image ${item.imageClass}`}></div>
      <div className="card-copy">
        <span className="card-tag">{item.tag}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <strong>{item.price}</strong>
      </div>
    </article>
  );
}

export function MenuSection({ fullPage = false }: { fullPage?: boolean }) {
  const [category, setCategory] = useState<"all" | MenuItem["category"]>("all");
  const visibleItems = fullPage
    ? menuItems.filter(
        (item) => category === "all" || item.category === category,
      )
    : menuItems.slice(0, 3);
  return (
    <section
      className={`menu-section section-pad ${fullPage ? "menu-page-section" : ""}`}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Could this BE any more delicious?</p>
          <h2>
            Meet the <em>usuals.</em>
          </h2>
        </div>
        {!fullPage && (
          <Link className="text-link" to="/menu">
            View full menu <span>↗</span>
          </Link>
        )}
      </div>
      {fullPage && (
        <div
          className="menu-filters"
          role="group"
          aria-label="Filter menu items"
        >
          {(["all", "coffee", "sweet", "lunch"] as const).map((option) => (
            <button
              className={
                category === option ? "filter-button active" : "filter-button"
              }
              key={option}
              type="button"
              onClick={() => setCategory(option)}
            >
              {option === "all" ? "Everything" : option}
            </button>
          ))}
        </div>
      )}
      <div className="menu-grid">
        {visibleItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export function StorySection({ fullPage = false }: { fullPage?: boolean }) {
  return (
    <section
      className={`story-section ${fullPage ? "story-page-section" : ""}`}
    >
      <div className="story-image">
        <div className="photo-caption">
          Central Perk, West Village
          <br />
          <strong>Est. 1994</strong>
        </div>
      </div>
      <div className="story-copy">
        <p className="eyebrow">The one with the story</p>
        <h2>
          A place for
          <br />
          <em>your people.</em>
        </h2>
        <p>
          Back when six friends could fit on one orange couch, Central Perk
          opened its doors. Three decades later, we're still saving a seat for
          you.
        </p>
        {!fullPage && (
          <Link className="button button-outline" to="/story">
            Come hang out <ArrowRight size={17} />
          </Link>
        )}
      </div>
    </section>
  );
}

export function VisitDetails() {
  return (
    <div className="visit-details" id="reserve">
      <div>
        <span>Hours</span>
        <p>
          Mon–Fri · 7am–8pm
          <br />
          Sat–Sun · 8am–8pm
        </p>
      </div>
      <div>
        <span>Location</span>
        <p>
          90 Bedford Street
          <br />
          New York, NY 10014
        </p>
      </div>
      <a className="button button-coral" href="mailto:hello@centralperk.cafe">
        <CalendarDays size={17} /> Reserve a booth
      </a>
    </div>
  );
}

export function VisitSection() {
  return (
    <section className="visit-section section-pad">
      <div className="visit-heading">
        <p className="eyebrow">The one near your apartment</p>
        <h2>
          See you at <em>Central Perk.</em>
        </h2>
        <p>
          Open seven days a week, from your first coffee to your last plot
          twist.
        </p>
      </div>
      <VisitDetails />
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="experience-section section-pad">
      <div className="experience-photo">
        <span className="photo-label">
          A little place
          <br />
          <strong>with a lot of heart.</strong>
        </span>
      </div>
      <div className="experience-copy">
        <p className="eyebrow">The one with the good stuff</p>
        <h2>
          More than
          <br />
          <em>just coffee.</em>
        </h2>
        <p>
          Stay for the playlist, the comfy corner, and the kind of conversations
          that accidentally last three hours.
        </p>
        <div className="experience-list">
          <span>
            <Coffee size={18} /> Small-batch coffee
          </span>
          <span>
            <Music2 size={18} /> Good music always
          </span>
          <span>
            <Wifi size={18} /> Wi-Fi, no rush
          </span>
        </div>
        <Link className="text-link" to="/visit">
          Plan your visit <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-mark">
        <Heart size={21} fill="currentColor" />
      </div>
      <blockquote>
        “The kind of place where you come in for one coffee and leave with six
        new inside jokes.”
      </blockquote>
      <p>— A regular, obviously</p>
    </section>
  );
}
