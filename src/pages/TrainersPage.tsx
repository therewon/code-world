import { PageHero } from "../components/PageHero";
import { PersonCard } from "../components/PersonCard";
import { trainers } from "../data/siteData";

export function TrainersPage() {
  return (
    <>
      <PageHero eyebrow="Təlimçilər" title="Komandamızla tanış olun" text="Biliklərini real sənaye təcrübəsi ilə birləşdirən mentorlarla inkişaf et." />
      <section className="py-[110px] max-[680px]:py-[75px]">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[680px]:w-[min(1180px,calc(100%-28px))] max-[680px]:grid-cols-1">
          {[...trainers, ...trainers].map((person, index) => <PersonCard key={`${person.name}-${index}`} person={person} />)}
        </div>
      </section>
    </>
  );
}
