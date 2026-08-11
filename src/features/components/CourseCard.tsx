import { ArrowUpRight } from "lucide-react";
import type { Course } from "../../data/siteData";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="min-w-full overflow-hidden rounded-2xl bg-[#F4F5F7] md:min-w-[411px]">
      <div className="flex h-60 items-center justify-center bg-[#EEF0F4]">
        <div className="text-6xl font-bold">
          {course.icon}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[18px] font-semibold text-black">
          {course.title}
        </h3>

        <p className="mt-1 text-sm text-[#64748B]">
          {course.duration} · {course.schedule}
        </p>

        <button
          type="button"
          className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase text-black"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-black text-white">
            <ArrowUpRight size={13} />
          </span>

          Ətraflı
        </button>
      </div>
    </article>
  );
};