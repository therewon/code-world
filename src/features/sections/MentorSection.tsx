import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MentorCard } from "../components/MentorCard"
import {
    categories,
    mentors,
    type MentorFilter,
} from "../../data/siteData";

const MentorSection = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] =
        useState<MentorFilter>("all");

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const filteredMentor = useMemo(() => {
        if (activeCategory === "all") {
            return mentors;
        }


        return mentors.filter(
            (mentor) => mentor.category === activeCategory
        );
    }, [activeCategory]);

    const handleScroll = (direction: "prev" | "next") => {
        sliderRef.current?.scrollBy({
            left: direction === "next" ? 435 : -435,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-4">
            <div className="mx-auto max-w-360">
                <div className="mb-6 flex items-center justify-between gap-5 ">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const isActive = category === activeCategory;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-[#015CE9] text-white"
                                            : "bg-[#FAFAFA] text-[#747877] hover:bg-white"
                                        }`}
                                >
                                    {t(`categories.${category}`)}
                                </button>
                            );
                        })}
                    </div>

                    {/* Navigation */}
                    <div className="hidden shrink-0 gap-6 md:flex">
                        <button
                            type="button"
                            onClick={() => handleScroll("prev")}
                            className="flex size-12 items-center justify-center rounded-full bg-[#F4F5F7] transition hover:bg-white"
                            aria-label={t("common.previous")}
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
                            aria-label={t("common.next")}
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
                    {filteredMentor.length > 0 ? (
                        filteredMentor.map((mentor) => (
                            <MentorCard
                                key={mentor.id}
                                mentor={mentor}
                            />
                        ))
                    ) : (
                        <div className="flex min-h-60 w-full items-center justify-center">
                            <p className="text-lg font-medium text-[#747877]">
                                {t("common.noData")}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MentorSection
