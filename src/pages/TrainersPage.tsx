import FooterForm from "../components/FooterForm";
import { PageHero } from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import MentorSection from "../features/sections/MentorSection";
import { useTranslation } from "react-i18next";

export function TrainersPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("trainersPage.eyebrow")}
        title={t("trainersPage.title")}
        text={t("trainersPage.text")}
      />
      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container">
          <SectionHeading title={t("trainersPage.sectionTitle")} />
          <MentorSection />
        </div>
      </section>
      <FooterForm />
    </>
  );
}
