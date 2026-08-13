import type { ReactNode } from "react";

const gradientBG = "bg-[linear-gradient(152.8deg,#070A12_1.83%,#071E47_33.23%,#0B2C8D_66.43%,#015CE9_91.55%)]"

export function PageHero({ title, text, children }: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {


  return (
    <section className={`relative flex min-h-[540px] py-50 text-white ${gradientBG}`}>
      <div className="site-container text-center flex flex-col justify-center items-center">
        <h1 className="mb-[22px] max-w-[900px] text-[clamp(48px,6vw,60px)] font-bold leading-[120%] max-sm:text-[28px]">{title}</h1>
        <p className="mb-[30px] max-w-[620px] text-lg leading-[1.65] text-[#c8d4ed] max-[680px]:text-[15px]">{text}</p>
        {children}
      </div>
    </section>
  );
}
