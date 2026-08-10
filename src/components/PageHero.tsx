import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, children }: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-[95px] pt-[165px] text-white max-[680px]:min-h-[500px] max-[680px]:pb-[65px] max-[680px]:pt-[135px]">
      <div className="pointer-events-none absolute right-[8%] top-[130px] size-[280px] rounded-full bg-[radial-gradient(circle_at_32%_28%,#7dceff,#0a67e0_52%,#05225b_75%)] shadow-[0_35px_90px_rgba(0,0,0,.26)] max-[680px]:-right-[120px] max-[680px]:opacity-65" />
      <div className="pointer-events-none absolute bottom-[70px] right-[31%] size-20 rounded-full bg-[#0b8aff] blur-[1px]" />
      <div className="relative z-[2] mx-auto w-[min(1180px,calc(100%-40px))] max-[680px]:w-[min(1180px,calc(100%-28px))]">
        <span className="inline-block text-xs font-black uppercase tracking-[.16em] text-[#8fc1ff]">{eyebrow}</span>
        <h1 className="mb-[22px] mt-4 max-w-[900px] text-[clamp(48px,6vw,76px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">{title}</h1>
        <p className="mb-[30px] max-w-[620px] text-lg leading-[1.65] text-[#c8d4ed] max-[680px]:text-[15px]">{text}</p>
        {children}
      </div>
    </section>
  );
}
