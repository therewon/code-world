import { Link } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";
import { PersonCard } from "../components/PersonCard";
import { courses, graduates, trainers } from "../data/siteData";

const containerClass = "mx-auto w-[min(1180px,calc(100%-40px))] max-[680px]:w-[min(1180px,calc(100%-28px))]";
const eyebrowClass = "inline-block text-xs font-black uppercase tracking-[.16em] text-[#0869f7]";
const buttonClass = "inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-full px-[22px] text-sm font-extrabold transition duration-200 hover:-translate-y-0.5";
const sectionClass = "py-[110px] max-[680px]:py-[75px]";
const cardGridClass = "grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1";

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-[42px] flex items-end justify-between gap-[30px] max-[680px]:mb-7 max-[680px]:flex-col max-[680px]:items-start">
      <div>
        <span className={eyebrowClass}>{eyebrow}</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[790px] bg-[radial-gradient(circle_at_77%_20%,#0a55c7_0,transparent_30%),linear-gradient(130deg,#06183f_0%,#052766_50%,#063582_100%)] pb-[100px] pt-[165px] text-white after:pointer-events-none after:absolute after:-bottom-[180px] after:-left-[10%] after:-right-[10%] after:h-[300px] after:scale-x-[1.2] after:rounded-[50%_50%_0_0] after:bg-white after:content-[''] max-[980px]:pt-[155px] max-[680px]:min-h-0 max-[680px]:pb-[70px] max-[680px]:pt-[125px] max-[680px]:after:hidden">
        <div className={`${containerClass} relative z-[2] grid grid-cols-[1.03fr_.97fr] items-center gap-[70px] max-[980px]:grid-cols-1`}>
          <div className="max-[980px]:text-center">
            <span className={`${eyebrowClass} text-[#8fc1ff]`}>Code World akademiyası</span>
            <h1 className="mb-[22px] mt-4 text-[clamp(48px,6vw,82px)] font-bold leading-[.98] tracking-[-.055em] max-[680px]:text-[43px]">Gələcəyini kodla, dünyanı dəyiş!</h1>
            <p className="max-w-[620px] text-lg leading-[1.65] text-[#c8d4ed] max-[980px]:mx-auto max-[680px]:text-[15px]">Praktiki tədris, real layihələr və peşəkar mentor dəstəyi ilə texnologiya karyerana güclü başlanğıc et.</p>
            <div className="mt-[34px] flex flex-wrap gap-3 max-[980px]:justify-center">
              <Link to="/kurslar" className={`${buttonClass} bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]`}>
                Kursları kəşf et <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/tecrube" className={`${buttonClass} border border-white/25 bg-white/5 text-white`}>Təcrübə proqramı</Link>
            </div>
            <div className="mt-[50px] flex gap-8 max-[980px]:justify-center max-[680px]:gap-[19px]">
              <div className="grid gap-[3px]"><strong className="text-[25px] max-[680px]:text-xl">1200+</strong><span className="text-xs text-[#9fb0d0]">Məzun</span></div>
              <div className="grid gap-[3px]"><strong className="text-[25px] max-[680px]:text-xl">24</strong><span className="text-xs text-[#9fb0d0]">Peşəkar mentor</span></div>
              <div className="grid gap-[3px]"><strong className="text-[25px] max-[680px]:text-xl">87%</strong><span className="text-xs text-[#9fb0d0]">İşə qəbul</span></div>
            </div>
          </div>

          <div className="relative min-h-[480px] max-[980px]:mx-auto max-[980px]:w-full max-[980px]:max-w-[620px] max-[680px]:min-h-[370px]" aria-label="İnteraktiv kodlaşdırma illüstrasiyası">
            <div className="pointer-events-none absolute right-5 top-10 size-[370px] rounded-full bg-[radial-gradient(circle_at_32%_24%,#69b8ff_0,#1683ff_23%,#064ab4_56%,#021336_80%)] shadow-[inset_-35px_-38px_70px_rgba(0,0,0,.36),0_45px_90px_rgba(0,30,99,.65)] before:absolute before:-inset-6 before:rounded-full before:border before:border-[#97d0ff73] before:content-[''] after:absolute after:-inset-[65px] after:rounded-full after:border after:border-[#97d0ff29] after:content-[''] max-[680px]:right-[5px] max-[680px]:size-[280px]" />
            <div className="absolute left-2.5 top-28 w-[290px] -rotate-[5deg] rounded-[18px] border border-white/20 bg-[#050c1ec2] p-[18px] shadow-[0_25px_65px_rgba(0,0,0,.35)] backdrop-blur-xl max-[680px]:top-[100px] max-[680px]:w-[230px]">
              <div className="mb-5 flex gap-[5px]">
                <i className="size-[7px] rounded-full bg-[#4b5d7d]" /><i className="size-[7px] rounded-full bg-[#4b5d7d]" /><i className="size-[7px] rounded-full bg-[#4b5d7d]" />
              </div>
              <code className="text-[15px] leading-[2] text-[#d8e6ff]"><span className="text-[#64adff]">const</span> future = <b className="font-medium text-[#9effb4]">&quot;yaz&quot;</b>;<br /><span className="text-[#64adff]">learn</span>(skills);<br /><span className="text-[#64adff]">build</span>(career);</code>
            </div>
            <div className="pointer-events-none absolute right-0 top-[65px] rotate-[8deg] rounded-[13px] bg-[#087ef5] px-[15px] py-3 text-[13px] font-extrabold text-white shadow-[0_15px_35px_rgba(0,0,0,.28)]">React</div>
            <div className="pointer-events-none absolute bottom-20 right-[18px] -rotate-[7deg] rounded-[13px] bg-[#f05136] px-[15px] py-3 text-[13px] font-extrabold text-white shadow-[0_15px_35px_rgba(0,0,0,.28)] max-[680px]:bottom-[35px]">Figma</div>
            <div className="pointer-events-none absolute bottom-[30px] left-20 rounded-[13px] bg-[#a4ffbc] px-[15px] py-3 text-[13px] font-extrabold text-[#102341] shadow-[0_15px_35px_rgba(0,0,0,.28)]">QA</div>
          </div>
        </div>
      </section>

      <section className="relative z-[3] bg-white">
        <div className={`${containerClass} flex min-h-[110px] items-center justify-between gap-7 text-[#99a0aa] max-[680px]:flex-wrap max-[680px]:justify-center max-[680px]:py-[25px]`}>
          <span className="text-xs font-extrabold uppercase tracking-[.12em] max-[680px]:w-full max-[680px]:text-center">Partnyorlarımız</span>
          {['Paşa Bank', 'Birbank', 'Kapital Bank', 'ABB', 'ATL Tech'].map((partner) => <strong key={partner} className="text-[17px] text-[#8b919b]">{partner}</strong>)}
        </div>
      </section>

      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading eyebrow="İstiqamətini seç" title="Gələcəyin peşələri burada başlayır">
            <Link to="/kurslar" className={`${buttonClass} bg-[#11151c] text-white`}>Bütün kurslar</Link>
          </SectionHeading>
          <div className={`${cardGridClass} gap-6`}>{courses.slice(0, 3).map((course) => <CourseCard key={course.title} course={course} />)}</div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f2f3f5]`}>
        <div className={containerClass}>
          <SectionHeading eyebrow="Mentor heyəti" title="Sənayenin peşəkarlarından öyrən">
            <Link to="/telimciler" className="inline-flex items-center gap-[7px] text-[13px] font-black uppercase text-[#0869f7]">Hamısını göstər ↗</Link>
          </SectionHeading>
          <div className={cardGridClass}>{trainers.map((person) => <PersonCard key={person.name} person={person} />)}</div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={`${containerClass} grid grid-cols-2 items-center gap-[90px] max-[980px]:grid-cols-1 max-[980px]:gap-[45px]`}>
          <div className="relative min-h-[500px] overflow-hidden rounded-[30px] bg-[linear-gradient(140deg,#061b4c,#0871f4)] before:pointer-events-none before:absolute before:-right-20 before:-top-20 before:size-[330px] before:rounded-full before:bg-[radial-gradient(circle_at_30%_30%,#73c9ff,#084bb8_60%,#05163e)] before:content-[''] max-[680px]:min-h-[400px]">
            <span className="absolute left-[35px] top-[25px] text-[90px] font-black text-white/35">03</span>
            <div className="absolute left-[70px] top-[190px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:left-[25px]">Real layihə</div>
            <div className="absolute right-[45px] top-[285px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:right-5">Mentor dəstəyi</div>
            <div className="absolute bottom-[35px] left-[105px] min-w-[190px] rounded-2xl border border-white/30 bg-white/10 p-[19px] font-extrabold text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] backdrop-blur-xl max-[680px]:left-[55px]">Karyera planı</div>
          </div>
          <div>
            <span className={eyebrowClass}>Təcrübə proqramı</span>
            <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">İlk iş təcrübən buradan başlayır</h2>
            <p className="max-w-[560px] text-[17px] leading-[1.7] text-[#6e7580]">Üç aylıq proqramda real komandaya qoşul, layihə üzərində çalış və portfolionu gücləndir.</p>
            <ul className="my-[26px] grid list-none gap-3.5 p-0 text-[#3f4651]">
              {['Real layihəyə qəbul və komanda işi', 'Həftəlik mentor görüşləri', 'Sertifikat və karyera dəstəyi'].map((item) => (
                <li key={item} className="relative pl-8 before:absolute before:-top-0.5 before:left-0 before:grid before:size-[22px] before:place-items-center before:rounded-full before:bg-[#0869f7] before:text-[11px] before:font-black before:text-white before:content-['✓']">{item}</li>
              ))}
            </ul>
            <Link to="/tecrube" className={`${buttonClass} bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]`}>Ətraflı məlumat</Link>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f2f3f5]`}>
        <div className={containerClass}>
          <SectionHeading eyebrow="Uğur hekayələri" title="Məzunlarımız bu gün haradadır?">
            <Link to="/mezunlar" className="inline-flex items-center gap-[7px] text-[13px] font-black uppercase text-[#0869f7]">Məzunlara bax ↗</Link>
          </SectionHeading>
          <div className={cardGridClass}>{graduates.map((person) => <PersonCard key={person.name} person={person} graduate />)}</div>
        </div>
      </section>

      <section className="bg-[#f2f3f5] pb-[100px] pt-[30px]">
        <div className={`${containerClass} relative flex min-h-[330px] items-center justify-between gap-[35px] overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_85%_15%,#1687ff,transparent_32%),linear-gradient(135deg,#071d4d,#075bc8)] p-[70px] text-white after:pointer-events-none after:absolute after:-bottom-[110px] after:-right-[70px] after:size-[310px] after:rounded-full after:border after:border-white/25 after:content-[''] max-[680px]:min-h-[370px] max-[680px]:flex-col max-[680px]:items-start max-[680px]:px-7 max-[680px]:py-[42px]`}>
          <div>
            <span className={`${eyebrowClass} text-[#8fc1ff]`}>Növbəti addım</span>
            <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">Gələcəyini qurmağa hazırsan?</h2>
            <p className="text-[#b7cae9]">Sənə uyğun proqramı seç, Code World icmasına qoşul.</p>
          </div>
          <Link to="/qeydiyyat" className={`${buttonClass} relative z-[1] bg-white text-[#061c4d]`}>İndi qeydiyyatdan keç</Link>
        </div>
      </section>
    </>
  );
}
