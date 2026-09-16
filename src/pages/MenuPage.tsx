import { MenuSection } from "../components/CafeSections";

export function MenuPage() {
  return (
    <main className="inner-page">
      <section className="page-intro">
        <p className="eyebrow">The one with the menu</p>
        <h1>
          What&apos;s <em>brewing?</em>
        </h1>
        <p>
          Every cup, slice, and sandwich is made for lingering a little longer.
        </p>
      </section>
      <MenuSection fullPage />
      <section className="menu-note">
        <CoffeeIcon />
        <div>
          <strong>Need a recommendation?</strong>
          <p>
            Ask whoever is behind the bar. They know what you need before you
            do.
          </p>
        </div>
      </section>
    </main>
  );
}

function CoffeeIcon() {
  return (
    <span className="menu-note-icon" aria-hidden="true">
      ☕
    </span>
  );
}
