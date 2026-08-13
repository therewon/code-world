import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[720px] flex-col items-center justify-center px-5 pb-20 pt-[140px] text-center">
      <span className="text-[100px] font-black leading-none text-[#0869f7]">404</span>
      <h1 className="mb-2 mt-[15px] text-[42px] font-bold">{t("notFound.title")}</h1>
      <p className="mb-[26px] text-[#6e7580]">{t("notFound.text")}</p>
      <Link to="/" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">{t("notFound.back")}</Link>
    </section>
  );
}
