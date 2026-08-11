import { Link } from "react-router-dom";
import { courses, educations, graduates, trainers } from "../data/siteData";
import HeroBgImg from "../assets/hero-bg-img.png"
import CourseSection from "../features/sections/CourseSection"
import MentorSection from "../features/sections/MentorSection";
import GraduateSection from "../features/sections/GraduateSection";
import InternshipSection from "../features/sections/InternshipSection";
import ArrowImage from "../assets/arrow-image.png"
import PlusImage from "../assets/plus-image.png"
import { ChevronDown, Plus } from "lucide-react";

function SectionHeading({ title }: { title: string; }) {
  return (
    <div>
      <div>
        <h2 className="text-[clamp(35px,4vw,44px)] font-bold leading-[1.2] tracking-[-.045em] max-md:text-[28px] max-md:w-9/10 w-2/5">{title}</h2>
      </div>
    </div>
  );
}

const gradientColor = "bg-[linear-gradient(152.8deg,_#070A12_1.83%,_#071E47_33.23%,_#0B2C8D_66.43%,_#015CE9_91.55%)]"

export function HomePage() {
  return (
    <>
      <section className={`${gradientColor} relative max-sm:pb-6  sm:pt-[159px] pt-[136px] text-white z-0`}>
        <div className="site-container relative z-2 gap-17.5">
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="mb-[22px] mt-4 text-[clamp(48px,6vw,60px)] font-bold leading-[1.2] max-[680px]:text-[28px] max-w-[996px]">Peşəkar təhsil və güclü mentor dəstəyi ilə gələcəyinizə bu gündən investisiya edin.</h1>
            <p className="max-w-[620px] text-lg leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto max-[680px]:text-[15px]">Code World Tədris və Təcrübə Mərkəzində proqramlaşdırma, dizayn, data analitika, QA və digər müasir sahələr üzrə praktiki biliklər əldə edin.</p>
            <div className="mt-[34px] flex flex-wrap gap-3 max-[980px]:justify-center">
              <Link to="/kurslar" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] min-w-50 flex justify-between">
                Müraciət et <span aria-hidden="true" className="">↗</span>
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
          <SectionHeading title="Potensialını hansı sahədə kəşf etmək istəyirsən?" />
          <CourseSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeading title="Gələcəyinə yol açacaq mütəxəssislərlə tanış ol" />
          <MentorSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title="Məzunlarımız bu gün haradadır?" />
          <GraduateSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title="İlk iş təcrübən buradan başlayır" />
          <InternshipSection />
        </div>
      </section>



      <section className="md:pb-25 pt-7.5 rounded-b-3xl translate-y-6 bg-white">
        <div className="max-w-7xl lg:mx-auto sm:mx-4 relative md:flex min-h-[400px]  justify-between rounded-3xl bg-[#242424] md:p-10 p-4">
          <img src={ArrowImage} alt="" className="absolute md:left-2/5  md:-bottom-15 right-0 max-md:top-0 md:rotate-250 rotate-180 md:w-[200px] w-30"/>
          <img src={PlusImage} alt="" className="absolute md:left-2/5 left-2/5 -top-10  md:w-[200px] w-20"/>
          <div>
            <h2 className="mt-2.5 md:max-w-2/3 text-[clamp(35px,4vw,44px)] font-bold leading-[1.2] mb-4 max-[680px]:text-[22px] text-white">Gələcəyini <br className="md:block"/> qurmağa hazırsan?</h2>
            <p className="text-[#9A9A9A] leading-normal md:w-2/3 max-sm:text-sm mb-12">Məlumatlarını qeyd et, komandamız <br className="md:block"/> əlaqə saxlayaraq bütün suallarını cavablandırsın.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:w-1/2 z-10">
            <form action="">
              <input type="text" placeholder="Ad soyadınız" className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl mb-3" />
              <input type="text" placeholder="+994 XX XXX XX XX" className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl mb-3" />
              <div className="relative mb-6">
                <select
                  name="course"
                  defaultValue=""
                  className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl appearance-none pr-12"
                >
                  <option value="" disabled>
                    Tədrisi seçin
                  </option>

                  {educations.map((education) => (
                    <option key={education.id} value={education.value}>
                      {education.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                />
              </div>
              <button type="submit" className="px-4 py-5 w-full bg-[#015CE9] rounded-4xl text-white">Müraciət et</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
