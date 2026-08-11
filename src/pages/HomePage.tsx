import { Link } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";
import { PersonCard } from "../components/PersonCard";
import { courses, graduates, trainers } from "../data/siteData";
import HeroBgImg from "../assets/hero-bg-img.png"
import CourseSection from "../features/sections/CourseSection"

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[42px] flex items-end justify-between gap-[30px] max-[680px]:mb-7 max-[680px]:flex-col max-[680px]:items-start">
      <div>
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative min-h-197.5 bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-[100px] pt-[165px] text-white ">
        <div className="site-container relative z-2 gap-17.5">
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="mb-[22px] mt-4 text-[clamp(48px,6vw,82px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">Peşəkar təhsil və güclü mentor dəstəyi ilə gələcəyinizə bu gündən investisiya edin.</h1>
            <p className="max-w-[620px] text-lg leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto max-[680px]:text-[15px]">Code World Tədris və Təcrübə Mərkəzində proqramlaşdırma, dizayn, data analitika, QA və digər müasir sahələr üzrə praktiki biliklər əldə edin.</p>
            <div className="mt-[34px] flex flex-wrap gap-3 max-[980px]:justify-center">
              <Link to="/kurslar" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)] min-w-50 flex justify-between">
                Müraciət et <span aria-hidden="true" className="">↗</span>
              </Link>
            </div>
            <div>
              <img src={HeroBgImg} alt="" />
            </div>
          </div>

        </div>
      </section>

      <section className="section-spacing rounded-t-2xl -translate-y-20 bg-white">
        <div className="site-container">
          <SectionHeading eyebrow="" title="Potensialını hansı sahədə kəşf etmək istəyirsən?">
            <Link to="/kurslar" className="site-button bg-[#11151c] text-white">Bütün kurslar</Link>
          </SectionHeading>
          <CourseSection />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeading eyebrow="" title="Gələcəyinə yol açacaq mütəxəssislərlə tanış ol">
            <Link to="/telimciler" className="inline-flex items-center gap-[7px] text-[13px] font-black uppercase text-[#0869f7]">Hamısını göstər ↗</Link>
          </SectionHeading>
          <div className="card-grid">{trainers.map((person) => <PersonCard key={person.name} person={person} />)}</div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container grid grid-cols-2 items-center gap-[90px] max-[980px]:grid-cols-1 max-[980px]:gap-[45px]">
          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] bg-[linear-gradient(140deg,#061b4c,#0871f4)] before:pointer-events-none before:absolute before:-right-20 before:-top-20 before:size-[330px] before:rounded-full before:bg-[radial-gradient(circle_at_30%_30%,#73c9ff,#084bb8_60%,#05163e)] before:content-[''] max-[680px]:min-h-[400px]">
            <span className="absolute left-[35px] top-[25px] text-[90px] font-black text-white/35">03</span>
            <div className="absolute left-[70px] top-[190px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:left-[25px]">Real layihə</div>
            <div className="absolute right-[45px] top-[285px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:right-5">Mentor dəstəyi</div>
            <div className="absolute bottom-[35px] left-[105px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:left-[55px]">Karyera planı</div>
          </div>
          <div>
            <span className="section-eyebrow">Təcrübə proqramı</span>
            <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">İlk iş təcrübən buradan başlayır</h2>
            <p className="max-w-[560px] text-[17px] leading-[1.7] text-[#6e7580]">Üç aylıq proqramda real komandaya qoşul, layihə üzərində çalış və portfolionu gücləndir.</p>
            <ul className="my-[26px] grid list-none gap-3.5 p-0 text-[#3f4651]">
              {['Real layihəyə qəbul və komanda işi', 'Həftəlik mentor görüşləri', 'Sertifikat və karyera dəstəyi'].map((item) => (
                <li key={item} className="relative pl-8 before:absolute before:-top-0.5 before:left-0 before:grid before:size-[22px] before:place-items-center before:rounded-full before:bg-[#0869f7] before:text-[11px] before:font-black before:text-white before:content-['✓']">{item}</li>
              ))}
            </ul>
            <Link to="/tecrube" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">Ətraflı məlumat</Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[#f2f3f5]">
        <div className="site-container">
          <SectionHeading eyebrow="Uğur hekayələri" title="Məzunlarımız bu gün haradadır?">
            <Link to="/mezunlar" className="inline-flex items-center gap-[7px] text-[13px] font-black uppercase text-[#0869f7]">Məzunlara bax ↗</Link>
          </SectionHeading>
          <div className="card-grid">{graduates.map((person) => <PersonCard key={person.name} person={person} graduate />)}</div>
        </div>
      </section>

      <section className="bg-[#f2f3f5] pb-[100px] pt-[30px]">
        <div className="site-container relative flex min-h-[330px] items-center justify-between gap-[35px] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_85%_15%,#1687ff,transparent_32%),linear-gradient(135deg,#071d4d,#075bc8)] p-[70px] text-white after:pointer-events-none after:absolute after:-bottom-[110px] after:-right-[70px] after:size-[310px] after:rounded-full after:border after:border-white/25 after:content-[''] max-[680px]:min-h-[370px] max-[680px]:flex-col max-[680px]:items-start max-[680px]:px-7 max-[680px]:py-[42px]">
          <div>
            <span className="section-eyebrow text-[#8fc1ff]">Növbəti addım</span>
            <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">Gələcəyini qurmağa hazırsan?</h2>
            <p className="text-[#b7cae9]">Sənə uyğun proqramı seç, Code World icmasına qoşul.</p>
          </div>
          <Link to="/qeydiyyat" className="site-button relative z-1 bg-white text-[#061c4d]">İndi qeydiyyatdan keç</Link>
        </div>
      </section>
    </>
  );
}
