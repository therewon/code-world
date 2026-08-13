import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../auth/useAuth";
import { courseDetails } from "../../data/courseDetails";

const navigation = [
  { to: "/tecrube", labelKey: "nav.internship" },
  { to: "/telimciler", labelKey: "nav.trainers" },
  { to: "/mezunlar", labelKey: "nav.graduates" },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const firstName = user?.name.split(" ")[0];
  const coursesActive = pathname.startsWith("/kurslar");

  const closeNavigation = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 py-5.5 text-white max-[680px]:pt-3.75">
      <div className="site-container flex items-center justify-between gap-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-black tracking-wider"
          aria-label={t("nav.homeLabel")}
        >
          <span>CODE WORLD</span>
        </Link>

        <nav
          className={`${menuOpen ? "max-[980px]:flex" : "max-[980px]:hidden"} flex items-center gap-1.75 rounded-full border border-white/10 bg-[#040811ad] p-1.5 backdrop-blur-[14px] max-[980px]:absolute max-[980px]:left-5 max-[980px]:right-5 max-[980px]:top-19 max-[980px]:max-h-[calc(100vh-100px)] max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:overflow-y-auto max-[980px]:rounded-[18px] max-[980px]:bg-[#050c1cf7] max-[980px]:p-3.5`}
          aria-label={t("nav.mainMenu")}
        >
          <div className="group relative min-w-26 max-[980px]:w-full">
            <button
              type="button"
              className={`nav-link flex w-full cursor-pointer items-center justify-center gap-1.5 border-0 ${coursesActive ? "bg-white/10 text-white" : ""}`}
              aria-label={t("nav.openCourses")}
              aria-controls="courses-submenu"
              aria-expanded={coursesOpen}
              onClick={() => setCoursesOpen((current) => !current)}
            >
              {t("nav.courses")}
              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`transition duration-200 ${coursesOpen ? "rotate-180" : "group-hover:rotate-180"}`}
                aria-hidden="true"
              />
            </button>

            <div
              id="courses-submenu"
              className={`absolute left-1/2 top-[calc(100%+12px)] z-30 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#071020f7] p-2.5 shadow-[0_24px_70px_rgba(0,0,0,.35)] backdrop-blur-xl transition duration-200 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[''] max-[980px]:static max-[980px]:mt-2 max-[980px]:w-full max-[980px]:translate-x-0 max-[980px]:shadow-none max-[980px]:before:hidden ${coursesOpen
                ? "grid visible pointer-events-auto translate-y-0 opacity-100"
                : "hidden pointer-events-none translate-y-2 opacity-0 min-[981px]:grid min-[981px]:invisible min-[981px]:group-hover:visible min-[981px]:group-hover:pointer-events-auto min-[981px]:group-hover:translate-y-0 min-[981px]:group-hover:opacity-100"
                }`}
            >
              <div className="grid gap-0.5">
                {courseDetails.map((course) => (
                  <NavLink
                    key={course.slug}
                    to={`/kurslar/${course.slug}`}
                    onClick={closeNavigation}
                    className={({ isActive }) =>
                      `flex items-center justify-between gap-4 rounded-xl px-3.5 py-3 text-sm transition ${isActive ? "bg-[#0869f7] text-white" : "text-[#d6dfef] hover:bg-white/10 hover:text-white"}`
                    }
                  >
                    <span className="font-semibold">{t(`courseCatalog.${course.slug}.title`)}</span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[.08em] text-white/45">
                      {t(`categories.${course.category}`)}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeNavigation}
              className={({ isActive }) =>
                `nav-link ${isActive ? "bg-white/10 text-white" : ""}`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 max-[680px]:gap-2">
          <select
            value={(i18n.resolvedLanguage ?? "az").split("-")[0]}
            onChange={(event) => void i18n.changeLanguage(event.target.value)}
            aria-label={t("nav.language")}
            className="w-12 cursor-pointer bg-transparent py-2 text-xs font-bold text-white outline-none transition *:text-black hover:text-white/80 sm:w-auto sm:text-sm"
          >
            <option value="az">AZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          {user ? (
            <div className="relative">
              <button
                type="button"
                className="flex min-h-10.5 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0869f7] px-4.5 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(5,98,242,.25)] hover:bg-white hover:text-[#0869f7] max-[680px]:min-h-10 max-[680px]:px-3.5"
                onClick={() => setAccountOpen((current) => !current)}
                aria-expanded={accountOpen}
              >
                <span className="grid size-6.25 place-items-center rounded-full bg-white text-[11px] text-[#0869f7]">
                  {firstName?.[0]?.toUpperCase()}
                </span>
                {firstName}
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] grid w-57.5 gap-1.5 rounded-2xl bg-white p-4 text-[#0d1119] shadow-[0_18px_55px_rgba(0,0,0,.22)]">
                  <strong>{user.name}</strong>
                  <span className="overflow-hidden text-ellipsis text-xs text-[#6e7580]">
                    {user.email}
                  </span>
                  <button
                    type="button"
                    className="mt-2.25 cursor-pointer rounded-[10px] border-0 bg-[#fff0ef] p-2.5 font-bold text-[#b42318]"
                    onClick={() => {
                      logout();
                      setAccountOpen(false);
                    }}
                  >
                    {t("nav.logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/qeydiyyat"
              className="flex min-h-10.5 items-center justify-center rounded-full bg-[#0869f7] px-4.5 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(5,98,242,.25)] hover:bg-white hover:text-[#0869f7] max-[680px]:min-h-10 max-[680px]:px-3.5"
            >
              {t("nav.login")}
            </Link>
          )}

          <button
            type="button"
            className="hidden size-10.5 cursor-pointer rounded-full border-0 bg-white max-[980px]:block"
            aria-label={t("nav.openMenu")}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((current) => !current);
              setCoursesOpen(false);
            }}
          >
            <span className="mx-auto my-1 block h-0.5 w-4.25 bg-[#111]" />
            <span className="mx-auto my-1 block h-0.5 w-4.25 bg-[#111]" />
          </button>
        </div>
      </div>
    </header>
  );
}
