import FooterForm from "../components/FooterForm";
import { PageHero } from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import GraduateSection from "../features/sections/GraduateSection";
import { useTranslation } from "react-i18next";

export function GraduatesPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero eyebrow={t("graduatesPage.eyebrow")} title={t("graduatesPage.title")} text={t("graduatesPage.text")} />
      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container relative">
          <SectionHeading title={t("graduatesPage.sectionTitle")} />
          <GraduateSection />
        </div>
      </section>


      <FooterForm />
    </>
  );
}
