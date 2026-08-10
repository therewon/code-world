import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[720px] flex-col items-center justify-center px-5 pb-20 pt-[140px] text-center">
      <span className="text-[100px] font-black leading-none text-[#0869f7]">404</span>
      <h1 className="mb-2 mt-[15px] text-[42px] font-bold">Səhifə tapılmadı</h1>
      <p className="mb-[26px] text-[#6e7580]">Axtardığın səhifə mövcud deyil və ya ünvanı dəyişib.</p>
      <Link to="/" className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#0869f7] px-[22px] text-sm font-extrabold text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">Əsas səhifəyə qayıt</Link>
    </section>
  );
}
