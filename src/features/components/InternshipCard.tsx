import type { InternshipStep } from '../../data/siteData'
import { useTranslation } from "react-i18next";

interface InternshipCardProps {
    intern: InternshipStep
}

const InternshipCard = ({ intern }: InternshipCardProps) => {
    const { t } = useTranslation();
    const step = t(`internshipPage.programSteps.${intern.id - 1}`, {
        returnObjects: true,
    }) as { title: string; description: string };

    return (
        <article className="relative h-90 sm:min-w-102.75 overflow-hidden rounded-2xl bg-[#F2F3F5] p-8 max-sm:mb-3">
            {/* Content */}
            <div className="relative z-10">
                <h3 className="mb-4 text-[24px] font-semibold text-black">
                    {step.title}
                </h3>

                <p className="max-w-85 text-[16px] font-medium leading-6 text-[#64748B]">
                    {step.description}
                </p>
            </div>

            {/* Number */}
            <span className="absolute bottom-8 left-8 z-20 text-[36px] font-semibold text-[#015CE9]">
                {intern.id < 10 ? `0${intern.id}` : intern.id}
            </span>

            {/* Image */}
            <img
                src={intern.image}
                alt=""
                className="absolute -bottom-5 -right-3 w-40 object-contain"
            />
        </article>
    )
}

export default InternshipCard
