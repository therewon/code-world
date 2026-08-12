import React from 'react'
import type { InternshipStep } from '../../data/siteData'

interface InternshipCardProps {
    intern: InternshipStep
}

const InternshipCard = ({ intern }: InternshipCardProps) => {
    return (
        <article className="relative h-[360px] sm:min-w-[411px] overflow-hidden rounded-2xl bg-[#F2F3F5] p-8 max-sm:mb-3">
            {/* Content */}
            <div className="relative z-10">
                <h3 className="mb-4 text-[24px] font-semibold text-black">
                    {intern.title}
                </h3>

                <p className="max-w-[340px] text-[16px] font-medium leading-6 text-[#64748B]">
                    {intern.description}
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
