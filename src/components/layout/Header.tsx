import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const navigation = [
  { to: "/kurslar", label: "Kurslar" },
  { to: "/tecrube", label: "Təcrübə" },
  { to: "/telimciler", label: "Təlimçilər" },
  { to: "/mezunlar", label: "Məzunlar" },
];

export function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const firstName = user?.name.split(" ")[0];

  return (
    <header className="absolute inset-x-0 top-0 z-20 py-[22px] text-white max-[680px]:pt-[15px]">
      <div className="site-container flex items-center justify-between gap-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-black tracking-[.05em]"
          aria-label="Code World əsas səhifə"
        >
          <span>CODE WORLD</span>
        </Link>

        <nav
          className={`${menuOpen ? "max-[980px]:flex" : "max-[980px]:hidden"} flex items-center gap-[7px] rounded-full border border-white/10 bg-[#040811ad] p-1.5 backdrop-blur-[14px] max-[980px]:absolute max-[980px]:left-5 max-[980px]:right-5 max-[980px]:top-[76px] max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:rounded-[18px] max-[980px]:bg-[#050c1cf7] max-[980px]:p-3.5`}
          aria-label="Əsas menyu"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? "bg-white/10 text-white" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 max-[680px]:gap-2">
          <select
            defaultValue="AZ"
            aria-label="Dil seçimi"
            className="cursor-pointer bg-transparent py-2 text-sm font-medium text-white outline-none transition *:text-black max-sm:hidden hover:text-white/80"
          >
            <option value="AZ">AZ</option>
            <option value="RU">RU</option>
            <option value="EN">EN</option>
          </select>

          {user ? (
            <div className="relative">
              <button
                type="button"
                className="flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-full hover:text-[#0869f7] hover:bg-white hover:border-[#0869f7] bg-[#0869f7] px-[18px] text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(5,98,242,.25)] max-[680px]:min-h-10 max-[680px]:px-3.5"
                onClick={() => setAccountOpen((current) => !current)}
                aria-expanded={accountOpen}
              >
                <span className="grid size-[25px] place-items-center rounded-full bg-white text-[11px] text-[#0869f7]">
                  {firstName?.[0]?.toUpperCase()}
                </span>
                {firstName}
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] grid w-[230px] gap-1.5 rounded-2xl bg-white p-4 text-[#0d1119] shadow-[0_18px_55px_rgba(0,0,0,.22)]">
                  <strong>{user.name}</strong>
                  <span className="overflow-hidden text-ellipsis text-xs text-[#6e7580]">{user.email}</span>
                  <button
                    type="button"
                    className="mt-[9px] cursor-pointer rounded-[10px] border-0 bg-[#fff0ef] p-2.5 font-bold text-[#b42318]"
                    onClick={() => { logout(); setAccountOpen(false); }}
                  >
                    Hesabdan çıx
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/daxil-ol"
              className="flex min-h-[42px] items-center justify-center rounded-full bg-[#0869f7] hover:text-[#0869f7] hover:bg-white hover:border-[#0869f7] hover:border px-[18px] text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(5,98,242,.25)] max-[680px]:min-h-10 max-[680px]:px-3.5"
            >
              Daxil ol
            </Link>
          )}

          <button
            type="button"
            className="hidden size-[42px] cursor-pointer rounded-full border-0 bg-white max-[980px]:block "
            aria-label="Menyunu aç"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="mx-auto my-1 block h-0.5 w-[17px] bg-[#111]" />
            <span className="mx-auto my-1 block h-0.5 w-[17px] bg-[#111]" />
          </button>
        </div>
      </div>
    </header>
  );
}
