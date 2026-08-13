import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiMailboxFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const gradientColor = "bg-[linear-gradient(139.36deg,#070A12_-16.95%,#071E47_9.43%,#0B2C8D_47.72%,#015CE9_95.19%)]"

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={`${gradientColor} pb-10 pt-18 text-white`}>
      <div className="site-container md:flex justify-between max-[680px]:gap-8.75">
        <div>
          <Link to="/" className="mb-4.5 inline-flex items-center gap-2.5 whitespace-nowrap text-xl font-black tracking-[.05em]">
            <span>CODE WORLD</span>
          </Link>
          <p className=" text-[#D7D7D7] flex items-center gap-2 mb-4"><FaPhoneAlt color="white" size={18} /> +994 (77) 328 29 36</p>
          <p className=" text-[#D7D7D7] flex items-center gap-2 mb-4"><PiMailboxFill color="white" size={18} /> codeworld.az@gmail.com</p>
          <p className="max-w-62.5 text-[#D7D7D7] flex gap-2 mb-8"><FaLocationDot color="white" size={20} /> {t("footer.address")}</p>
          <div className="flex gap-3 mb-9">
            <div className="bg-[#FFFFFF14] rounded-2xl p-[13px]">
              <BiLogoInstagramAlt size={20} />
            </div>
            <div className="bg-[#FFFFFF14] rounded-2xl p-[13px]">
              <FaFacebook size={20} />
            </div>
            <div className="bg-[#FFFFFF14] rounded-2xl p-[13px]">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
        <div className="sm:flex gap-20.75">
          <div className="flex flex-col items-start gap-2 *:whitespace-nowrap mb-8">
            <h3 className="mb-4 text-lg font-bold">{t("footer.quickLinks")}</h3>
            <Link className="footer-link" to="/tecrube">{t("nav.internship")}</Link>
            <Link className="footer-link" to="/telimciler">{t("nav.trainers")}</Link>
            <Link className="footer-link" to="/mezunlar">{t("nav.graduates")}</Link>
          </div>
          <div className="flex flex-col items-start gap-2 mb-8">
            <h3 className="mb-4 text-lg font-bold">{t("footer.programming")}</h3>
            <a className="footer-link">C#</a>
            <a className="footer-link">SQL</a>
            <span className="footer-link">Java</span>
            <span className="footer-link">Frontend</span>
            <span className="footer-link">Android</span>
            <span className="footer-link">Full Stack</span>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2 *:whitespace-nowrap sm:mb-6.5 mb-8">
              <h3 className="mb-3 text-lg font-bold">{t("footer.design")}</h3>
              <Link className="footer-link" to="/kurslar/ui-ux-dizayn">UX/UI</Link>
              <Link className="footer-link" to="/kurslar/qrafik-dizayn">{t("footer.graphicDesign")}</Link>
            </div>
            <div className="flex flex-col items-start gap-2 *:whitespace-nowrap">
              <h3 className="mb-3 text-lg font-bold">{t("footer.dataQa")}</h3>
              <Link className="footer-link" to="/kurslar/data-analitika-ve-qa">QA</Link>
              <Link className="footer-link" to="/kurslar/data-analitika-ve-qa">{t("footer.dataAnalytics")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
