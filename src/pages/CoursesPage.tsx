import { useState } from "react";
import { Link } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";
import { PageHero } from "../components/PageHero";
import { courses } from "../data/siteData";

export function CoursesPage() {
  const categories = ["Hamısı", "Development", "Design", "Data & QA", "System & Support"];
  const [activeCategory, setActiveCategory] = useState("Hamısı");
  const visibleCourses = activeCategory === "Hamısı"
    ? courses
    : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <PageHero eyebrow="Tədris proqramları" title="Bacarıqlarını karyeraya çevir" text="Başlanğıc səviyyədən işə hazır portfolioya qədər praktik və mentor dəstəkli proqramlar.">
        <Link to="/qeydiyyat" className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#0869f7] px-[22px] text-sm font-extrabold text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">Proqrama qoşul</Link>
      </PageHero>
      <section className="py-[110px] max-[680px]:py-[75px]">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[680px]:w-[min(1180px,calc(100%-28px))]">
          <div className="mb-8 flex flex-wrap gap-[9px]" aria-label="Kurs kateqoriyaları">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${activeCategory === category ? "bg-[#0869f7] text-white" : "bg-[#f0f2f5] text-[#616875]"} cursor-pointer rounded-full border-0 px-[17px] py-[11px] text-xs font-bold`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
            {visibleCourses.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </div>
      </section>
    </>
  );
}
