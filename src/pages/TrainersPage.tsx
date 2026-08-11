import { PageHero } from "../components/PageHero";
import { PersonCard } from "../components/PersonCard";
import { trainers } from "../data/siteData";

export function TrainersPage() {
  return (
    <>
      <PageHero eyebrow="Təlimçilər" title="Komandamızla tanış olun" text="Biliklərini real sənaye təcrübəsi ilə birləşdirən mentorlarla inkişaf et." />
      <section className="section-spacing">
        <div className="site-container card-grid">
          {[...trainers, ...trainers].map((person, index) => <PersonCard key={`${person.name}-${index}`} person={person} />)}
        </div>
      </section>
    </>
  );
}
