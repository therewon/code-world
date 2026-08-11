import { ArrowUpRight } from "lucide-react";
import type { Graduate } from "../../data/siteData";

interface GraduateCardProps {
    graduate: Graduate;
}

export const GraduateCard = ({ graduate }: GraduateCardProps) => {
    return (
        <article className="min-w-full overflow-hidden rounded-2xl bg-[#F2F3F5] md:min-w-[411px]">

            <div className="h-90 overflow-hidden rounded-2xl relative">
                <img
                    src={graduate.image}
                    className="h-full w-full object-cover object-top"
                />
            </div>

            <div className="p-4 border-t border-[#E6E6E6]">
                <h3 className="text-[18px] font-semibold text-black">
                    {graduate.name}
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                    {graduate.position} | <span className="text-[#3E6EEB]"> {graduate.company}</span>
                </p>

                <div className="flex gap-4 items-center">
                    <button
                    type="button"
                    className="mt-5 flex items-center gap-2 text-sm font-semibold  text-black"
                >
                    <span className="flex size-5 items-center justify-center rounded-full bg-black text-white">
                        <ArrowUpRight size={13} />
                    </span>

                    GitHub
                </button>
                <button
                    type="button"
                    className="mt-5 flex items-center gap-2 text-sm font-semibold  text-black"
                >
                    <span className="flex size-5 items-center justify-center rounded-full bg-black text-white">
                        <ArrowUpRight size={13} />
                    </span>

                    Behance
                </button>
                </div>
            </div>
        </article>
    );
};