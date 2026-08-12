import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/siteData";
import RegisterImage from "../assets/register-image.png"
import RegisterImage1 from "../assets/register-image-1.png"
import RegisterImage2 from "../assets/register-image-2.png"

type RegistrationType = "student" | "intern";
type TeachingFormat = "in-person" | "online";

const gradientBackground = "bg-[linear-gradient(152.8deg,_#070A12_1.83%,_#071E47_33.23%,_#0B2C8D_66.43%,_#015CE9_91.55%)]"
const fieldClassName =
  " w-full rounded-xl border border-transparent bg-[#f1f2f4] p-4 text-[14px] text-[#111827]! outline-none transition placeholder:text-[#7c8799] focus:border-[#0869f7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(8,105,247,.1)]";

export function RegisterPage() {
  const [registrationType, setRegistrationType] = useState<RegistrationType>("student");
  const [teachingFormat, setTeachingFormat] = useState<TeachingFormat>("in-person");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={`${gradientBackground} relative grid overflow-hidden lg:grid-cols-2`}>
      <Link
        className="absolute left-5 top-5 z-30 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-sm font-bold text-[#111827] shadow-[0_8px_28px_rgba(0,0,0,.14)] backdrop-blur transition hover:-translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0869f7]/25 lg:left-8 lg:top-8 lg:bg-white/10 lg:text-white lg:ring-1 lg:ring-white/25 lg:hover:bg-white/20"
        to="/"
        aria-label="Ana səhifəyə qayıt"
      >
        <ArrowLeft aria-hidden="true" size={19} strokeWidth={2.3} />
        <span>Geri</span>
      </Link>
        <img
          className="absolute w-25 top-1/4 right-3/5 rotate-330 object-contain object-bottom scale-150"
          src={RegisterImage1}
          alt=""
        />
         <img
          className="absolute w-25 top-1/4 left-1/10 rotate-330 object-contain object-bottom scale-150"
          src={RegisterImage2}
          alt=""
        />
      <div className="hidden lg:block h-full" aria-hidden="true">
        <img
          className="w-full h-161 object-contain object-bottom scale-150"
          src={RegisterImage}
          alt=""
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center rounded-t-[28px] bg-white px-5 py-20 sm:px-10 lg:rounded-l-[28px] lg:rounded-tr-none lg:px-[clamp(44px,6vw,108px)] lg:py-10">
        <form className="w-full max-w-[565px] text-[#10131b]" onSubmit={handleSubmit}>
          <div className="mb-8 text-center">
            <h1 className="text-[clamp(40px,4vw,46px)] font-bold leading-none tracking-[-.045em]">Qeydiyyat</h1>
            <p className="mx-auto mt-4 max-w-[485px] text-[15px] leading-6 text-[#5f6065] sm:text-lg">
              Aşağıdakı məlumatları dolduraraq kurs və ya təcrübə proqramına müraciət edin.
            </p>
          </div>

          <div className="mb-6 flex r gap-2" aria-label="Qeydiyyat növü">
            <button
              type="button"
              className={`min-w-[104px] rounded-full px-5 py-3 text-sm font-semibold transition ${registrationType === "student"
                  ? "bg-[#0869f7] text-white shadow-[0_8px_20px_rgba(8,105,247,.2)]"
                  : "bg-[#f1f2f4] text-[#687386] hover:bg-[#e8eaee]"
                }`}
              aria-pressed={registrationType === "student"}
              onClick={() => setRegistrationType("student")}
            >
              Tələbə
            </button>
            <button
              type="button"
              className={`min-w-[104px] rounded-full px-5 py-3 text-sm font-semibold transition ${registrationType === "intern"
                  ? "bg-[#0869f7] text-white shadow-[0_8px_20px_rgba(8,105,247,.2)]"
                  : "bg-[#f1f2f4] text-[#687386] hover:bg-[#e8eaee]"
                }`}
              aria-pressed={registrationType === "intern"}
              onClick={() => setRegistrationType("intern")}
            >
              Təcrübəçi
            </button>
          </div>

          <input type="hidden" name="registrationType" value={registrationType} />
          <input type="hidden" name="teachingFormat" value={teachingFormat} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#111827]">
              Ad və Soyad*
              <input
                className={fieldClassName}
                name="fullName"
                type="text"
                placeholder="Aysel Əlizadə"
                autoComplete="name"
                minLength={2}
                required
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[#111827]">
              Telefon nömrəniz*
              <input
                className={fieldClassName}
                name="phone"
                type="tel"
                placeholder="+994 XX XXX XX XX"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-[13px] font-semibold text-[#111827]">
            Maraqlandığınız kurs*
            <span className="relative">
              <select
                className={`${fieldClassName} cursor-pointer appearance-none `}
                name="course"
                defaultValue=""
                required
              >
                <option value="" disabled className="">
                  Kurs seçin
                </option>
                {courses.map((course) => (
                  <option key={course.title} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8993a2]"
                aria-hidden="true"
                size={18}
              />
            </span>
          </label>

          <fieldset className="mt-4">
            <legend className="mb-2 text-[13px] font-semibold text-[#111827]">Tədris formatı</legend>
            <div className="flex gap-2">
              <button
                type="button"
                className={`rounded-xl px-5 py-3.5 text-sm transition ${teachingFormat === "in-person"
                    ? "bg-[#e5efff] font-semibold text-[#0869f7] ring-1 ring-[#0869f7]/20"
                    : "bg-[#f1f2f4] text-[#273043] hover:bg-[#e8eaee]"
                  }`}
                aria-pressed={teachingFormat === "in-person"}
                onClick={() => setTeachingFormat("in-person")}
              >
                Əyani
              </button>
              <button
                type="button"
                className={`rounded-xl px-5 py-3.5 text-sm transition ${teachingFormat === "online"
                    ? "bg-[#e5efff] font-semibold text-[#0869f7] ring-1 ring-[#0869f7]/20"
                    : "bg-[#f1f2f4] text-[#273043] hover:bg-[#e8eaee]"
                  }`}
                aria-pressed={teachingFormat === "online"}
                onClick={() => setTeachingFormat("online")}
              >
                Onlayn
              </button>
            </div>
          </fieldset>

          <label className="mt-4 grid gap-2 text-[13px] font-semibold text-[#111827]">
            Qeyd
            <textarea
              className={`${fieldClassName} min-h-[104px] resize-y py-4 sm:min-h-[112px]`}
              name="note"
              placeholder="Əlavə qeydlər, suallar..."
            />
          </label>

          {submitted && (
            <p className="mt-4 rounded-xl bg-[#ecfdf3] px-4 py-3 text-sm font-medium text-[#027a48]" role="status">
              Müraciətiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-[60px] w-full cursor-pointer items-center justify-center rounded-full bg-[#0869f7] px-6 text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(0,94,255,.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0060eb] hover:shadow-[0_17px_36px_rgba(0,94,255,.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0869f7]/25"
          >
            Qeydiyyatdan keç
          </button>
        </form>
      </div>
    </section>
  );
}
