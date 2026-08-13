import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Course } from "../data/siteData";

const iconColorClasses: Record<string, string> = {
  blue: "bg-[#151a24]",
  orange: "bg-[#e56c0b]",
  purple: "bg-[#7c48e8]",
  green: "bg-[#109d6a]",
  navy: "bg-[#312d75]",
  cyan: "bg-[#0698a8]",
};

export function CourseCard({ course }: { course: Course }) {
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-[20px] border border-[#e7e9ed] bg-white transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_22px_48px_rgba(24,34,49,.1)]">
      <div className="relative grid h-[245px] place-items-center overflow-hidden bg-[#edf0f4] max-[680px]:h-[220px]">
        <span className={`${iconColorClasses[course.color] ?? iconColorClasses.blue} relative z-[2] grid size-[115px] -rotate-6 place-items-center rounded-[28px] text-[34px] font-black tracking-[-.07em] text-white shadow-[0_25px_50px_rgba(0,0,0,.28)]`}>
          {course.icon}
        </span>
        <i aria-hidden="true" className="absolute right-12 top-10 size-11 rounded-full bg-[#0c75ff]" />
        <b aria-hidden="true" className="absolute bottom-[35px] left-[45px] size-7 rounded-full bg-[#ffd22f]" />
      </div>
      <div className="px-5 pb-[22px] pt-[18px]">
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#e8f8ee] px-[9px] py-[5px] text-[10px] font-extrabold text-[#167842]">{t("common.inPerson")}</span>
          <span className="rounded-full bg-[#e8f2ff] px-[9px] py-[5px] text-[10px] font-extrabold text-[#0059c9]">{t("common.online")}</span>
        </div>
        <h3 className="mb-[5px] mt-3 text-[19px] font-bold">{t(`courseCatalog.${course.slug}.title`)}</h3>
        <p className="mb-4 text-[13px] text-[#6e7580]">{t(`courseCatalog.${course.slug}.duration`)} · {t(`courseCatalog.${course.slug}.schedule`)}</p>
        <Link to={`/kurslar/${course.slug}`} className="inline-flex items-center gap-[7px] text-xs font-black uppercase text-[#111820]">
          {t("common.details")}
          <span aria-hidden="true" className="grid size-[22px] place-items-center rounded-full bg-black text-white">↗</span>
        </Link>
      </div>
    </article>
  );
}
