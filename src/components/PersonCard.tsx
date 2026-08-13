import type { Person } from "../data/siteData";
import { useTranslation } from "react-i18next";

export function PersonCard({ person, graduate = false }: { person: Person; graduate?: boolean }) {
  const { t } = useTranslation();

  return (
    <article className="group relative overflow-hidden rounded-[20px] border border-[#e7e9ed] bg-white transition duration-200 hover:-translate-y-[5px] hover:shadow-[0_22px_48px_rgba(24,34,49,.1)]">
      <div className="relative h-[330px] overflow-hidden bg-[#eceef1] max-[680px]:h-[390px]">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-[center_22%] transition-transform duration-300 group-hover:scale-[1.025]"
        />
        {graduate && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0869f7] px-2.5 py-[7px] text-[10px] font-extrabold text-white">{t("people.ourGraduate")}</span>
        )}
      </div>
      <div className="relative px-5 pb-[22px] pt-[18px]">
        <div className="flex flex-wrap gap-1.5">
          {person.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#e8f8ee] px-[9px] py-[5px] text-[10px] font-extrabold text-[#167842]">{tag}</span>
          ))}
        </div>
        <h3 className="mb-[5px] mt-3 text-[19px] font-bold">{person.name}</h3>
        <p className="mb-4 text-[13px] text-[#6e7580]">{person.position}</p>
        <span className="absolute right-[18px] top-[18px] grid size-[29px] place-items-center rounded-full bg-[#171b22] text-[11px] font-black text-white" aria-label={t("people.linkedin")}>in</span>
      </div>
    </article>
  );
}
