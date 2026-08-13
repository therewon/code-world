import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FiArrowUpRight } from "react-icons/fi";
import CoursesSection from "../features/sections/CourseSection";
import SectionHeading from "../components/SectionHeading";
import InternshipSection from "../features/sections/InternshipSection";
import FooterForm from "../components/FooterForm";
import MentorSection from "../features/sections/MentorSection";
import { ApplicationStepsTest } from "../components/ApplicationStepsTest";
import { useTranslation } from "react-i18next";

export function InternshipPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("internshipPage.eyebrow")}
        title={t("internshipPage.title")}
        text={t("internshipPage.text")}
      >
        <Link
          to="/qeydiyyat"
          className="pl-[14px] pr-2 py-[10px] min-w-[275px] rounded-[30px] bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]  flex justify-between items-center"
        >
          {t("common.register")}
          <span
            aria-hidden="true"
            className="bg-white rounded-full w-8 h-8 text-[#0869f7] flex items-center justify-center"
          >
            <FiArrowUpRight />
          </span>
        </Link>
      </PageHero>

      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container">
          <SectionHeading title={t("internshipPage.fieldsTitle")} />
          <CoursesSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title={t("internshipPage.expectationsTitle")} />
          <InternshipSection />
        </div>
      </section>

      <section className="section-spacing" aria-label={t("internshipPage.applicationAria")}>
        <div className="site-container relative">
          <p className="section-eyebrow mb-3">{t("internshipPage.testLabel")}</p>
          <SectionHeading title={t("internshipPage.applicationTitle")} />
          <ApplicationStepsTest />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeading title={t("internshipPage.mentorsTitle")} />
          <MentorSection />
        </div>
      </section>

      <FooterForm />
    </>
  );
}
