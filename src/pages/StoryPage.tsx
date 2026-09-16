import { StorySection } from "../components/CafeSections";

export function StoryPage() {
  return (
    <main className="inner-page">
      <section className="page-intro story-intro">
        <p className="eyebrow">The one with the story</p>
        <h1>
          A place for <em>your people.</em>
        </h1>
        <p>
          Six friends, one orange couch, and a coffeehouse with room for
          everyone.
        </p>
      </section>
      <StorySection fullPage />
      <section className="story-values">
        <div>
          <span>01</span>
          <h3>Come as you are</h3>
          <p>No dress code, no reservations required for feeling at home.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Stay for the story</h3>
          <p>The best conversations usually happen after the second cup.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Leave room for one more</h3>
          <p>There is always space on the couch for another friend.</p>
        </div>
      </section>
      <section className="quote-section">
        <p>“We&apos;ll be there for you.”</p>
        <span>Every morning. Every plot twist. Every cup.</span>
      </section>
    </main>
  );
}
