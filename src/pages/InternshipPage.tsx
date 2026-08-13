import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { FiArrowUpRight } from "react-icons/fi";
import CoursesSection from "../features/sections/CourseSection";
import SectionHeading from "../components/SectionHeading";
import InternshipSection from "../features/sections/InternshipSection";
import DesktopSkeleton from "../assets/desktop-skeleton.png";
import FooterForm from "../components/FooterForm";
import MentorSection from "../features/sections/MentorSection";

export function InternshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Təcrübə proqramı"
        title="İlk peşəkar təcrübənizi 
bizimlə qazanın"
        text="Karyeranıza güclü başlanğıc etmək üçün nəzəri biliklərinizi real layihələrdə tətbiq edin və peşəkar inkişaf yoluna addım atın."
      >
        <Link
          to="/qeydiyyat"
          className="pl-[14px] pr-2 py-[10px] min-w-[275px] rounded-[30px] bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]  flex justify-between items-center"
        >
          Qeydiyyatdan keç
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
          <SectionHeading title="Təcrübə imkanları təqdim etdiyimiz sahələr" />
          <CoursesSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title="Təcrübə proqramında sizi nələr gözləyir?" />
          <InternshipSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container relative">
          <SectionHeading title="Təcrübə proqramına qoşulmaq üçün" />
          <div className="relative w-full min-h-90 mt-8">
            <img
              src={DesktopSkeleton}
              alt=""
              className="absolute object-cover  w-full h-full"
            />
            <div className="z-10 absolute w-full h-full flex items-center justify-between">
              <div className="ml-10">
                <h3 className="mb-4 text-[24px] font-semibold text-white">
                  Qeydiyyatdan keçin
                </h3>
                <p className="text-lg leading-[1.4] text-[#747877] max-w-80">
                  İlk olaraq "Qeydiyyat" düyməsinə klikləyərək müraciət
                  formasını açın.
                </p>
              </div>
              <div className="flex flex-col gap-18">
                <div>
                  <h3 className="mb-4 text-[24px] font-semibold text-white">
                  Məlumatlarınızı doldurun
                </h3>
                <p className="text-lg leading-[1.4] text-[#747877] max-w-80">
                  Növbəti mərhələdə müraciət formasındakı bütün məlumatları diqqətlə doldurun.
                </p>
                </div>
                <div>
                  <h3 className="mb-4 text-[24px] font-semibold text-white">
                  Müraciətinizi göndərin
                </h3>
                <p className="text-lg leading-[1.4] text-[#747877] max-w-80">
                  Müraciətiniz uğurla göndərildikdən sonra sistem tərəfindən qəbul edilir və qiymətləndirilmə mərhələsinə keçir.
                </p>
                </div>
              </div>
              <div className="mr-10">
                <h3 className="mb-4 text-[24px] font-semibold text-white">
                  Qiymətləndirmə və əlaqə
                </h3>
                <p className="text-lg leading-[1.4] text-[#747877] max-w-80">
                  Müraciətiniz qiymətləndirildikdən sonra uyğun hesab edilən namizədlərlə qısa müddət ərzində telefon vasitəsilə əlaqə saxlanılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeading title="Təcrübə müddətində sizə dəstək olacaq mentorlar" />
          <MentorSection />
        </div>
      </section>

      <FooterForm />
    </>
  );
}
