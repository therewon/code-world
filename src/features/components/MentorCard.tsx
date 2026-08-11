import type { Mentor } from "../../data/siteData";
import { FaLinkedinIn } from "react-icons/fa";

interface MentorCardProps {
    mentor: Mentor;
}

export const MentorCard = ({ mentor }: MentorCardProps) => {
    return (
        <article className="min-w-full overflow-hidden rounded-2xl  md:min-w-[411px]">
            <div className="h-90 overflow-hidden rounded-2xl relative">
                <img
                    src={mentor.image}
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 flex gap-2">
                    {mentor.skills.map((skill,index)=>(
                        <p key={index} className="px-4 py-2 bg-[#E8F0FE] text-[#015CE9] rounded-2xl text-xs">
                            {skill}
                        </p>
                    ))}
                </div>
            </div>

            <div className="p-4 flex justify-between items-center">
                <div>
                    <h3 className="text-[18px] font-semibold text-black">
                        {mentor.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#64748B]">
                        {mentor.position}
                    </p>
                </div>

                <button
                    type="button"
                    className=" flex items-center gap-2 text-sm font-semibold uppercase text-black"
                >
                    <a href={mentor.linkedin}>
                        <span className="flex size-10 items-center justify-center rounded-full bg-black text-white p-2">
                            <FaLinkedinIn size={20} />
                        </span>
                    </a>
                </button>
            </div>
        </article>
    )
}

