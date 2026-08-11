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
        <Link to="/qeydiyyat" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">Proqrama qoşul</Link>
      </PageHero>
      <section className="section-spacing">
        <div className="site-container">
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
          <div className="card-grid gap-6">
            {visibleCourses.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </div>
      </section>
    </>
  );
}
