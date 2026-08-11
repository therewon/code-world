import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { UserRole } from "../auth/auth.types";
import { useAuth } from "../auth/useAuth";

export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError("");
    setLoading(true);
    try {
      await register({ name: String(data.get("name")), email: String(data.get("email")), password: String(data.get("password")), role });
      navigate("/", { replace: true });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Qeydiyyatı tamamlamaq mümkün olmadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex min-h-[850px] items-center overflow-hidden bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-[90px] pt-[145px] text-white max-[680px]:min-h-0 max-[680px]:pb-[70px] max-[680px]:pt-[120px]">
      <div className="pointer-events-none absolute right-[3%] top-20 size-[330px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#71c6ff,#075acb_52%,#031438_78%)] opacity-65" />
      <div className="pointer-events-none absolute -left-10 bottom-[60px] size-[150px] rounded-full border border-white/20" />
      <div className="site-container relative z-[2] grid grid-cols-[1fr_500px] items-center gap-[90px] max-[980px]:grid-cols-1 max-[980px]:gap-[45px]">
        <div className="max-[980px]:text-center">
          <span className="section-eyebrow text-[#8fc1ff]">Code World icması</span>
          <h1 className="mb-[22px] mt-4 text-[clamp(48px,5vw,72px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">Gələcəyinə gedən yolu bu gün başlat.</h1>
          <p className="max-w-[620px] text-[17px] leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto">Qeydiyyatdan sonra adın “Daxil ol” düyməsinin yerində görünəcək.</p>
          <div className="mt-7 flex flex-wrap gap-[18px] text-[13px] font-bold text-[#cae0ff] max-[980px]:justify-center"><span>✓ Praktiki tədris</span><span>✓ Real layihələr</span><span>✓ Mentor dəstəyi</span></div>
        </div>
        <form className="rounded-[25px] bg-white p-[38px] text-[#0d1119] shadow-[0_35px_85px_rgba(0,0,0,.3)] max-[980px]:mx-auto max-[980px]:w-[min(100%,520px)] max-[680px]:px-5 max-[680px]:py-7" onSubmit={handleSubmit}>
          <span className="text-[11px] font-black uppercase tracking-[.14em] text-[#0869f7]">Yeni hesab</span>
          <h2 className="mb-[25px] mt-2 text-[34px] font-bold tracking-[-.04em]">Qeydiyyatdan keç</h2>
          <div className="mb-[22px] grid grid-cols-2 gap-[7px] rounded-full bg-[#f0f2f5] p-[5px]" aria-label="Qeydiyyat növü">
            <button type="button" className={`role-button ${role === "student" ? "bg-[#0869f7] text-white" : "bg-transparent text-[#616875]"}`} onClick={() => setRole("student")}>Tələbə</button>
            <button type="button" className={`role-button ${role === "intern" ? "bg-[#0869f7] text-white" : "bg-transparent text-[#616875]"}`} onClick={() => setRole("intern")}>Təcrübəçi</button>
          </div>
          <label className="mb-[17px] grid gap-2 text-xs font-extrabold text-[#424956]">Ad və soyad<input className="form-input" name="name" type="text" placeholder="Ad Soyad" minLength={2} required /></label>
          <label className="mb-[17px] grid gap-2 text-xs font-extrabold text-[#424956]">E-poçt<input className="form-input" name="email" type="email" placeholder="ad@example.com" required /></label>
          <label className="mb-[17px] grid gap-2 text-xs font-extrabold text-[#424956]">Şifrə<input className="form-input" name="password" type="password" placeholder="Minimum 6 simvol" minLength={6} required /></label>
          {error && <p className="rounded-[10px] bg-[#fff0ef] px-[13px] py-[11px] text-xs text-[#b42318]" role="alert">{error}</p>}
          <button type="submit" className="site-button w-full cursor-pointer bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0" disabled={loading}>{loading ? "Hesab yaradılır..." : "Qeydiyyatı tamamla"}</button>
          <p className="mb-0 mt-[18px] text-center text-[13px] text-[#6e7580]">Artıq hesabın var? <Link className="font-extrabold text-[#0869f7]" to="/daxil-ol">Daxil ol</Link></p>
        </form>
      </div>
    </section>
  );
}
