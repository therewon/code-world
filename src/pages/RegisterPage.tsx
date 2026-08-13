import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowLeft, ChevronDown, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { courseDetails } from "../data/courseDetails";
import RegisterImage from "../assets/register-image.png"
import RegisterImage1 from "../assets/register-image-1.png"
import RegisterImage2 from "../assets/register-image-2.png"

type RegistrationType = "student" | "intern";
type TeachingFormat = "in-person" | "online";

const gradientBackground = "bg-[linear-gradient(152.8deg,_#070A12_1.83%,_#071E47_33.23%,_#0B2C8D_66.43%,_#015CE9_91.55%)]"
const fieldClassName =
  " w-full rounded-xl border border-transparent bg-[#f1f2f4] p-4 text-[14px] text-[#111827]! outline-none transition placeholder:text-[#7c8799] focus:border-[#0869f7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(8,105,247,.1)]";

export function RegisterPage() {
  const { t } = useTranslation();
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
        aria-label={t("registerPage.backAria")}
      >
        <ArrowLeft aria-hidden="true" size={19} strokeWidth={2.3} />
        <span>{t("registerPage.back")}</span>
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
        <form className="w-full max-w-141.25 text-[#10131b]" onSubmit={handleSubmit}>
          <div className="mb-8 text-center">
            <h1 className="text-[clamp(40px,4vw,46px)] font-bold leading-none tracking-[-.045em]">{t("registerPage.title")}</h1>
            <p className="mx-auto mt-4 max-w-121.25 text-[15px] leading-6 text-[#5f6065] sm:text-lg">
              {t("registerPage.text")}
            </p>
          </div>

          <div className="mb-6 flex r gap-2" aria-label={t("registerPage.typeAria")}>
            <button
              type="button"
              className={`min-w-26 rounded-full px-5 py-3 text-sm font-semibold transition ${registrationType === "student"
                ? "bg-[#0869f7] text-white shadow-[0_8px_20px_rgba(8,105,247,.2)]"
                : "bg-[#f1f2f4] text-[#687386] hover:bg-[#e8eaee]"
                }`}
              aria-pressed={registrationType === "student"}
              onClick={() => setRegistrationType("student")}
            >
              {t("registerPage.student")}
            </button>
            <button
              type="button"
              className={`min-w-26 rounded-full px-5 py-3 text-sm font-semibold transition ${registrationType === "intern"
                ? "bg-[#0869f7] text-white shadow-[0_8px_20px_rgba(8,105,247,.2)]"
                : "bg-[#f1f2f4] text-[#687386] hover:bg-[#e8eaee]"
                }`}
              aria-pressed={registrationType === "intern"}
              onClick={() => setRegistrationType("intern")}
            >
              {t("registerPage.intern")}
            </button>
          </div>

          <input type="hidden" name="registrationType" value={registrationType} />
          <input type="hidden" name="teachingFormat" value={teachingFormat} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#111827]">
              {t("registerPage.fullName")}
              <input
                className={fieldClassName}
                name="fullName"
                type="text"
                placeholder={t("registerPage.namePlaceholder")}
                autoComplete="name"
                minLength={2}
                required
              />
            </label>

            <label className="grid gap-2 text-[13px] font-semibold text-[#111827]">
              {t("registerPage.phone")}
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
            {t("registerPage.course")}
            <span className="relative">
              <select
                className={`${fieldClassName} cursor-pointer appearance-none `}
                name="course"
                defaultValue=""
                required
              >
                <option value="" disabled className="">
                  {t("registerPage.selectCourse")}
                </option>
                {courseDetails.map((course) => (
                  <option key={course.slug} value={course.slug}>
                    {t(`courseCatalog.${course.slug}.title`)}
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

          {
            registrationType === "student" ?
              <>
                <fieldset className="mt-4">
                  <legend className="mb-2 text-[13px] font-semibold text-[#111827]">{t("registerPage.format")}</legend>
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
                      {t("common.inPerson")}
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
                      {t("common.online")}
                    </button>
                  </div>
                </fieldset>

                <label className="mt-4 grid gap-2 text-[13px] font-semibold text-[#111827]">
                  {t("registerPage.note")}
                  <textarea
                    className={`${fieldClassName} min-h-26 resize-y py-4 sm:min-h-28`}
                    name="note"
                    placeholder={t("registerPage.notePlaceholder")}
                  />
                </label>
              </>
              :
              <>
                <div className="mt-4">
                  <label className="text-sm font-medium text-[#111827]">
                    {t("registerPage.portfolio")}
                    <div className="flex max-sm:flex-col gap-5 max-sm:gap-2.5 w-full mt-2">
                      <input
                        className={fieldClassName}
                        type="text"
                        placeholder="Behance"
                        minLength={2}
                        required
                      />

                      <input
                        className={fieldClassName}
                        type="text"
                        placeholder="Dribbble"
                        required
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <p className="font-medium text-sm mt-4">{t("registerPage.cv")}</p>
                  <label
                  htmlFor="cv-upload"
                  className="
        flex h-[130px] w-full cursor-pointer
        flex-col items-center justify-center
        rounded-xl border border-dashed border-[#B8C5D6]
        bg-[#F5F6F8] mt-2
      "
                >
                  <Upload size={22} className="mb-2 text-black" />

                  <p className="text-[13px] font-medium text-[#182033]">
                    {t("registerPage.dragCv")}
                  </p>

                  <p className="text-[13px] text-[#667085]">
                    {t("registerPage.chooseFile")}
                  </p>

                  <p className="mt-1 text-[12px] text-[#667085]">
                    {t("registerPage.fileRules")}
                  </p>

                  <input
                    id="cv-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>
                </div>
              </>
          }

          {submitted && (
            <p className="mt-4 rounded-xl bg-[#ecfdf3] px-4 py-3 text-sm font-medium text-[#027a48]" role="status">
              {t("registerPage.success")}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-15 w-full cursor-pointer items-center justify-center rounded-full bg-[#0869f7] px-6 text-[16px] font-bold text-white shadow-[0_14px_30px_rgba(0,94,255,.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0060eb] hover:shadow-[0_17px_36px_rgba(0,94,255,.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0869f7]/25"
          >
            {t("common.register")}
          </button>
        </form>
      </div>
    </section>
  );
}
