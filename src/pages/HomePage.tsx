import { Link } from "react-router-dom";
import HeroBgImg from "../assets/hero-bg-img.png"
import CourseSection from "../features/sections/CourseSection"
import MentorSection from "../features/sections/MentorSection";
import GraduateSection from "../features/sections/GraduateSection";
import InternshipSection from "../features/sections/InternshipSection";
import FooterForm from "../components/FooterForm";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";



const gradientColor = "bg-[linear-gradient(152.8deg,_#070A12_1.83%,_#071E47_33.23%,_#0B2C8D_66.43%,_#015CE9_91.55%)]"

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <section className={`${gradientColor} relative max-sm:pb-6  sm:pt-39.75 pt-34 text-white z-0`}>
        <div className="site-container relative z-2 gap-17.5">
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="mb-5.5 mt-4 text-[clamp(48px,6vw,60px)] font-bold leading-[1.2] max-[680px]:text-[28px] max-w-249">{t("home.heroTitle")}</h1>
            <p className="max-w-155 text-lg leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto max-[680px]:text-[15px]">{t("home.heroText")}</p>
            <div className="mt-8.5 flex flex-wrap gap-3 max-[980px]:justify-center">
              <Link to="/kurslar/frontend-development" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] min-w-50 flex justify-between">
                {t("common.apply")} <span aria-hidden="true" className="">↗</span>
              </Link>
            </div>
            <div className="">
              <img src={HeroBgImg} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing rounded-t-3xl -translate-y-20 bg-white z-9999!">
        <div className="site-container">
          <SectionHeading title={t("home.discoverTitle")} />
          <CourseSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeading title={t("home.mentorsTitle")} />
          <MentorSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title={t("home.graduatesTitle")} />
          <GraduateSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title={t("home.internshipTitle")} />
          <InternshipSection />
        </div>
      </section>



      <FooterForm />
    </>
  );
}
