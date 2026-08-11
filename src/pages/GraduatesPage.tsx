import { PageHero } from "../components/PageHero";
import { PersonCard } from "../components/PersonCard";
import { graduates } from "../data/siteData";

export function GraduatesPage() {
  return (
    <>
      <PageHero eyebrow="Məzunlarımız" title="Öyrən, yarat, karyerana başla" text="Code World məzunlarının texnologiya və dizayn dünyasındakı uğur hekayələri." />
      <section className="section-spacing">
        <div className="site-container card-grid">
          {[...graduates, ...graduates].map((person, index) => <PersonCard key={`${person.name}-${index}`} person={person} graduate />)}
        </div>
      </section>
    </>
  );
}
