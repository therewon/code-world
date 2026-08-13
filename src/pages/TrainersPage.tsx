import FooterForm from "../components/FooterForm";
import { PageHero } from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import MentorSection from "../features/sections/MentorSection";

export function TrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Təlimçilər"
        title="Komandamızla tanış olun"
        text="İllərin təcrübəsinə malik mütəxəssislərdən öyrənin, praktiki biliklər əldə edin və karyeranızı növbəti mərhələyə daşıyın."
      />
      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container">
          <SectionHeading title="Potensialını hansı sahədə kəşf etmək istəyirsən?" />
          <MentorSection />
        </div>
      </section>
      <FooterForm />
    </>
  );
}
