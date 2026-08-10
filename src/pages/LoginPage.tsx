import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const inputClass = "h-[52px] w-full rounded-xl border border-[#dfe3e8] bg-[#f7f8fa] px-[15px] text-[#111] outline-none transition focus:border-[#0869f7] focus:shadow-[0_0_0_4px_rgba(8,105,247,.1)]";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError("");
    setLoading(true);
    try {
      await login({ email: String(data.get("email")), password: String(data.get("password")) });
      navigate("/", { replace: true });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Daxil olmaq mümkün olmadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-[850px] items-center overflow-hidden bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-[90px] pt-[145px] text-white max-[680px]:min-h-0 max-[680px]:pb-[70px] max-[680px]:pt-[120px]">
      <div className="pointer-events-none absolute right-[3%] top-20 size-[330px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#71c6ff,#075acb_52%,#031438_78%)] opacity-65" />
      <div className="pointer-events-none absolute -left-10 bottom-[60px] size-[150px] rounded-full border border-white/20" />
      <div className="relative z-[2] mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[1fr_500px] items-center gap-[90px] max-[980px]:grid-cols-1 max-[980px]:gap-[45px] max-[680px]:w-[min(1180px,calc(100%-28px))]">
        <div className="max-[980px]:text-center">
          <span className="inline-block text-xs font-black uppercase tracking-[.16em] text-[#8fc1ff]">Yenidən xoş gəldin</span>
          <h1 className="mb-[22px] mt-4 text-[clamp(48px,5vw,72px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">Öyrənməyə qaldığın yerdən davam et.</h1>
          <p className="max-w-[620px] text-[17px] leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto">Hesabına daxil ol, proqramlarını və müraciətlərini bir yerdən izlə.</p>
        </div>
        <form className="rounded-[25px] bg-white p-[38px] text-[#0d1119] shadow-[0_35px_85px_rgba(0,0,0,.3)] max-[980px]:mx-auto max-[980px]:w-[min(100%,520px)] max-[680px]:px-5 max-[680px]:py-7" onSubmit={handleSubmit}>
          <span className="text-[11px] font-black uppercase tracking-[.14em] text-[#0869f7]">Hesaba giriş</span>
          <h2 className="mb-[25px] mt-2 text-[34px] font-bold tracking-[-.04em]">Daxil ol</h2>
          <label className="mb-[17px] grid gap-2 text-xs font-extrabold text-[#424956]">E-poçt<input className={inputClass} name="email" type="email" placeholder="ad@example.com" required /></label>
          <label className="mb-[17px] grid gap-2 text-xs font-extrabold text-[#424956]">Şifrə<input className={inputClass} name="password" type="password" placeholder="••••••••" required /></label>
          {error && <p className="rounded-[10px] bg-[#fff0ef] px-[13px] py-[11px] text-xs text-[#b42318]" role="alert">{error}</p>}
          <button type="submit" className="flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#0869f7] px-[22px] text-sm font-extrabold text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0" disabled={loading}>{loading ? "Yoxlanılır..." : "Daxil ol"}</button>
          <p className="mb-0 mt-[18px] text-center text-[13px] text-[#6e7580]">Hesabın yoxdur? <Link className="font-extrabold text-[#0869f7]" to="/qeydiyyat">Qeydiyyatdan keç</Link></p>
        </form>
      </div>
    </section>
  );
}
