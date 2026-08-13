import { useState } from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Minus,
  Plus,
  Search,
  UserRound,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FooterForm from "../components/FooterForm";
import MentorSection from "../features/sections/MentorSection";
import { NotFoundPage } from "./NotFoundPage";
import { courseDetails } from "../data/courseDetails";
import Mentor1 from "../assets/mentor-1.png";
import Mentor2 from "../assets/mentor-2.png";
import Mentor3 from "../assets/mentor-3.png";
import ArrowImage from "../assets/arrow-image.png";
import type { LocalizedCourse } from "../i18n/courseResources";

const audienceIcons = [UserRound, GraduationCap, Search];
const salaryWidthClasses = ["w-[72%]", "w-[84%]", "w-[96%]"];
const containerClass =
  "mx-auto w-[calc(100%-40px)] max-w-7xl max-[680px]:w-[calc(100%-28px)]";

export function CourseDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const courseDefinition = courseDetails.find((item) => item.slug === slug);
  const [openLesson, setOpenLesson] = useState<number | null>(null);

  if (!courseDefinition || !slug) {
    return <NotFoundPage />;
  }

  const course = t(`courseCatalog.${slug}`, {
    returnObjects: true,
  }) as LocalizedCourse;

  return (
    <>
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[linear-gradient(145deg,#050914_0%,#071d48_38%,#0b3299_70%,#0869f7_100%)] px-5 pb-28 pt-36 text-center text-white max-md:min-h-[570px] max-md:pb-24 max-md:pt-32">
        <div className="pointer-events-none absolute -left-24 top-32 size-72 rounded-full bg-[#0869f7]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 size-80 rounded-full bg-[#3993ff]/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <span className="mb-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#d8e7ff] uppercase backdrop-blur-sm">
            {t(`categories.${courseDefinition.category}`)}
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.045em]">
            {course.title}
          </h1>
          <p className="mt-7 max-w-[730px] text-base leading-7 text-[#cfdbef] max-md:text-[15px] max-md:leading-6">
            {course.description}
          </p>

          <div className="mt-8 flex items-center gap-3 text-left">
            <div className="flex -space-x-3" aria-hidden="true">
              {[Mentor1, Mentor2, Mentor3].map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className="size-11 rounded-full border-[3px] border-[#0a2d82] bg-[#eef0f4] object-cover object-top"
                />
              ))}
              <span className="grid size-11 place-items-center rounded-full border-[3px] border-[#0a2d82] bg-white text-xs font-black text-[#0869f7]">
                +99
              </span>
            </div>
            <strong className="max-w-48 text-sm leading-5 text-white">
              {course.studentCount}
            </strong>
          </div>
        </div>
      </section>

      <div className="relative -mt-8 rounded-t-[32px] bg-white pt-16 max-md:rounded-t-[24px] max-md:pt-12">
        <section className={`${containerClass} py-10`}>
          <h2 className="max-w-xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em]">
            {t("coursePage.audienceTitle", { title: course.title })}
          </h2>

          <div className="mt-9 grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
            {course.audience.map((item, index) => {
              const Icon = audienceIcons[index] ?? UserRound;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-[#f2f3f5] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,24,40,0.08)] max-md:p-6"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-white text-[#8da2ba] shadow-sm">
                    <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-lg font-bold text-[#161a22]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#687181]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={`${containerClass} py-20 max-md:py-14`}>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em]">
            {t("coursePage.futureTitle", { title: course.title })}
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-[250px_190px]">
            <article className="flex flex-col overflow-hidden rounded-2xl bg-[#0869f7] p-7 text-white lg:row-span-2 max-md:min-h-[420px]">
              <h3 className="max-w-xs text-xl font-semibold leading-7">
                {t("coursePage.salaryTitle")}
              </h3>
              <div className="mt-auto grid gap-2.5">
                {courseDefinition.salaryBands.map((salary, index) => (
                  <div
                    key={salary.level}
                    className={`${salaryWidthClasses[index] ?? "w-full"} rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm`}
                  >
                    <strong className="block text-lg">{salary.range}</strong>
                    <span className="mt-0.5 block text-xs text-white/70">
                      {t(`coursePage.levels.${salary.level}`)}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="grid place-items-center rounded-full bg-[#f1f2f4] p-7 text-center max-lg:mx-auto max-lg:aspect-square max-lg:w-full max-lg:max-w-[320px]">
              <div>
                <BriefcaseBusiness
                  className="mx-auto mb-4 text-[#0869f7]"
                  size={30}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <strong className="block text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-[#0869f7]">
                  {course.vacancies}
                </strong>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-2xl bg-[#242424] p-7 text-white">
              <div className="relative z-10 max-w-xs">
                <h3 className="text-xl font-semibold">{t("coursePage.extraIncome")}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {course.extraIncome}
                </p>
              </div>
              <img
                src={ArrowImage}
                alt=""
                className="pointer-events-none absolute -bottom-14 -right-8 w-44 rotate-[-12deg] opacity-90"
              />
            </article>

            <article className="flex items-center rounded-2xl bg-[#f1f2f4] px-7 py-6 lg:col-span-2">
              <p className="max-w-2xl text-xl font-medium leading-8 text-[#20242d] max-md:text-lg max-md:leading-7">
                {course.outcome}
              </p>
            </article>
          </div>
        </section>

        <section className={`${containerClass} py-20 max-md:py-14`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-[-0.04em]">
            {t("coursePage.curriculum")}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {[course.duration, course.schedule, course.portfolio].map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#242424] px-4 py-2 text-xs font-bold text-white"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            {course.curriculum.map((lesson, index) => {
              const isOpen = openLesson === index;

              return (
                <article
                  key={lesson.title}
                  className="overflow-hidden rounded-xl bg-[#f1f2f4]"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left text-[15px] font-semibold text-[#171b23] transition hover:bg-[#e9ebee]"
                    onClick={() => setOpenLesson(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{lesson.title}</span>
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#11151c] text-white">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-black/5 px-5 pb-5 pt-4 text-sm leading-6 text-[#687181]">
                      {lesson.description}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={`${containerClass} py-20 max-md:py-14`}>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em]">
            {t("coursePage.mentorsTitle")}
          </h2>
          <MentorSection />
        </section>

        <FooterForm />
      </div>
    </>
  );
}
