import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { useTranslation } from "react-i18next";

export function LoginPage() {
  const { t } = useTranslation();
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
      setError(reason instanceof Error ? t(reason.message) : t("login.genericError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-212.5 items-center overflow-hidden bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-22.5 pt-36.25 text-white max-[680px]:min-h-0 max-[680px]:pb-17.5 max-[680px]:pt-30">
      <div className="pointer-events-none absolute right-[3%] top-20 size-82.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#71c6ff,#075acb_52%,#031438_78%)] opacity-65" />
      <div className="pointer-events-none absolute -left-10 bottom-15 size-37.5 rounded-full border border-white/20" />
      <div className="site-container relative z-2 grid grid-cols-[1fr_500px] items-center gap-22.5 max-[980px]:grid-cols-1 max-[980px]:gap-11.25">
        <div className="max-[980px]:text-center">
          <span className="section-eyebrow text-[#8fc1ff]">{t("login.welcome")}</span>
          <h1 className="mb-5.5 mt-4 text-[clamp(48px,5vw,72px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">{t("login.title")}</h1>
          <p className="max-w-155 text-[17px] leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto">{t("login.text")}</p>
        </div>
        <form className="rounded-[25px] bg-white p-9.5 text-[#0d1119] shadow-[0_35px_85px_rgba(0,0,0,.3)] max-[980px]:mx-auto max-[980px]:w-[min(100%,520px)] max-[680px]:px-5 max-[680px]:py-7" onSubmit={handleSubmit}>
          <span className="text-[11px] font-black uppercase tracking-[.14em] text-[#0869f7]">{t("login.formEyebrow")}</span>
          <h2 className="mb-6.25 mt-2 text-[34px] font-bold tracking-[-.04em]">{t("login.formTitle")}</h2>
          <label className="mb-4.25 grid gap-2 text-xs font-extrabold text-[#424956]">{t("login.email")}<input className="form-input" name="email" type="email" placeholder="name@example.com" required /></label>
          <label className="mb-4.25 grid gap-2 text-xs font-extrabold text-[#424956]">{t("login.password")}<input className="form-input" name="password" type="password" placeholder="••••••••" required /></label>
          {error && <p className="rounded-[10px] bg-[#fff0ef] px-3.25 py-2.75 text-xs text-[#b42318]" role="alert">{error}</p>}
          <button type="submit" className="site-button w-full cursor-pointer bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0" disabled={loading}>{loading ? t("login.loading") : t("nav.login")}</button>
          <p className="mb-0 mt-4.5 text-center text-[13px] text-[#6e7580]">{t("login.noAccount")} <Link className="font-extrabold text-[#0869f7]" to="/qeydiyyat">{t("common.register")}</Link></p>
        </form>
      </div>
    </section>
  );
}
