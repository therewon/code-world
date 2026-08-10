import { Link } from "react-router-dom";

const footerLinkClass = "text-[13px] text-[#aebddb] transition hover:text-white";

export function Footer() {
  return (
    <footer className="bg-[#071b47] pb-5 pt-[72px] text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[1.5fr_.7fr_1fr] gap-[70px] max-[680px]:w-[min(1180px,calc(100%-28px))] max-[680px]:grid-cols-1 max-[680px]:gap-[35px]">
        <div>
          <Link to="/" className="mb-[18px] inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-black tracking-[.05em]">
            <span className="grid size-9 place-items-center rounded-[11px] bg-[linear-gradient(135deg,#0b77ff,#65aaff)] text-xs tracking-[-.04em] text-white shadow-[0_8px_22px_rgba(0,91,255,.34)]">CW</span>
            <span>CODE WORLD</span>
          </Link>
          <p className="max-w-[330px] leading-[1.65] text-[#9eb0cf]">Texnologiya və dizayn sahəsində gələcəyini bizimlə qur.</p>
        </div>
        <div className="flex flex-col items-start gap-[11px]">
          <h3 className="mb-2.5 text-sm font-bold">Sürətli keçidlər</h3>
          <Link className={footerLinkClass} to="/kurslar">Kurslar</Link>
          <Link className={footerLinkClass} to="/tecrube">Təcrübə</Link>
          <Link className={footerLinkClass} to="/telimciler">Təlimçilər</Link>
        </div>
        <div className="flex flex-col items-start gap-[11px]">
          <h3 className="mb-2.5 text-sm font-bold">Əlaqə</h3>
          <a className={footerLinkClass} href="tel:+994773282936">+994 (77) 328 29 36</a>
          <a className={footerLinkClass} href="mailto:codeworld.az@gmail.com">codeworld.az@gmail.com</a>
          <span className="text-[13px] text-[#aebddb]">Bakı şəhəri, Nizami rayonu</span>
        </div>
      </div>
      <div className="mx-auto mt-[55px] flex w-[min(1180px,calc(100%-40px))] justify-between border-t border-white/10 pt-5 text-[11px] text-[#8193b4] max-[680px]:w-[min(1180px,calc(100%-28px))] max-[680px]:flex-col max-[680px]:gap-2.5">
        <span>© {new Date().getFullYear()} Code World</span>
        <span>Bilikdən karyeraya.</span>
      </div>
    </footer>
  );
}
