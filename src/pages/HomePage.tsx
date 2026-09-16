import {
  ExperienceSection,
  Hero,
  MenuSection,
  StorySection,
  TestimonialSection,
  VisitSection,
} from "../components/CafeSections";

export function HomePage() {
  return (
    <main>
      <Hero />
      <section className="quick-stats" aria-label="Central Perk highlights">
        <div>
          <strong>30+</strong>
          <span>years of good coffee</span>
        </div>
        <div>
          <strong>6</strong>
          <span>friends at every table</span>
        </div>
        <div>
          <strong>7 days</strong>
          <span>open for your plot twists</span>
        </div>
      </section>
      <MenuSection />
      <ExperienceSection />
      <StorySection />
      <TestimonialSection />
      <VisitSection />
    </main>
  );
}
