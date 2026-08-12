import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout() {
  const { pathname } = useLocation();
  const isRegistrationPage = pathname === "/qeydiyyat";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen min-w-80 overflow-hidden bg-white font-sans text-[#10131b] antialiased">
      {!isRegistrationPage && <Header />}
      <main><Outlet /></main>
      {!isRegistrationPage && <Footer />}
    </div>
  );
}
