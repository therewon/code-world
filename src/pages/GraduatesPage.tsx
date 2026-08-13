import FooterForm from "../components/FooterForm";
import { PageHero } from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import GraduateSection from "../features/sections/GraduateSection";

export function GraduatesPage() {
  return (
    <>
      <PageHero eyebrow="Məzunlarımız" title="Məzunlarımız" text="Tədris proqramımızı uğurla tamamlayan və seçdikləri sahələrdə peşəkar inkişafını davam etdirən məzunlarımız." />
      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container relative">
          <SectionHeading title="Məzunlarımız bu gün haradadır?" />
          <GraduateSection />
        </div>
      </section>


      <FooterForm />
    </>
  );
}
