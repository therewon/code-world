import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  graduates
} from "../../data/siteData";
import { GraduateCard } from "../components/GraduateCard";

const GraduateSection = () => {

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "prev" | "next") => {
    sliderRef.current?.scrollBy({
      left: direction === "next" ? 435 : -435,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-4">
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between gap-5 ">
          

          {/* Navigation */}
          <div className="hidden shrink-0 gap-6 md:flex absolute right-0 top-13">
            <button
              type="button"
              onClick={() => handleScroll("prev")}
              className="flex size-12 items-center justify-center rounded-full bg-[#F4F5F7] transition hover:bg-white"
              aria-label="Previous courses"
            >
              <ArrowLeft
                size={21}
                strokeWidth={1.5}
                className="text-[#64748B]"
              />
            </button>

            <button
              type="button"
              onClick={() => handleScroll("next")}
              className="flex size-12 items-center justify-center rounded-full bg-[#F4F5F7] transition hover:bg-white"
              aria-label="Next courses"
            >
              <ArrowRight
                size={21}
                strokeWidth={1.5}
                className="text-[#64748B]"
              />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {graduates.length > 0 ? (
            graduates.map((graduate) => (
              <GraduateCard
                key={graduate.id}
                graduate={graduate}
              />
            ))
          ) : (
            <div className="flex min-h-60 w-full items-center justify-center">
              <p className="text-lg font-medium text-[#747877]">
                Məlumat tapılmadı
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GraduateSection