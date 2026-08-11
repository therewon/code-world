import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";

const steps = [
  { number: "01", title: "3 aylıq təcrübə proqramı", text: "Biliklərini real tapşırıqlarda tətbiq et və portfolionu formalaşdır." },
  { number: "02", title: "Layihəyə qəbul", text: "Bacarıqlarına uyğun layihə və komanda ilə praktiki işə başla." },
  { number: "03", title: "Layihə brifi", text: "Məqsəd, plan, texniki tələblər və nəticəni komandanla dəqiqləşdir." },
  { number: "04", title: "Mentor dəstəyi", text: "Həftəlik rəy, texniki yönləndirmə və inkişaf planı əldə et." },
];

export function InternshipPage() {
  return (
    <>
      <PageHero eyebrow="Təcrübə proqramı" title="İlk iş təcrübən buradan başlayır" text="Real layihə, komanda təcrübəsi və peşəkar mentor dəstəyi ilə CV-ni gücləndir.">
        <Link to="/qeydiyyat" className="site-button bg-[#0869f7] text-white shadow-[0_13px_30px_rgba(0,94,255,.25)] hover:shadow-[0_16px_35px_rgba(0,94,255,.34)]">Müraciət et</Link>
      </PageHero>
      <section className="section-spacing">
        <div className="site-container">
          <div className="mb-[42px] flex items-end justify-between gap-[30px] max-[680px]:mb-7 max-[680px]:flex-col max-[680px]:items-start">
            <div>
              <span className="section-eyebrow">Proses</span>
              <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">Təcrübə proqramında səni nələr gözləyir?</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
            {steps.map((step) => (
              <article key={step.number} className="flex min-h-[310px] flex-col rounded-[20px] bg-[#f2f3f5] p-7">
                <span className="order-3 mt-auto text-[34px] font-black text-[#0869f7]">{step.number}</span>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-[13px] leading-[1.6] text-[#6e7580]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-spacing bg-[#f2f3f5]">
        <div className="site-container grid grid-cols-[1.2fr_.8fr] items-center gap-[70px] max-[980px]:grid-cols-1 max-[980px]:gap-[25px]">
          <div>
            <span className="section-eyebrow">Kimlər üçündür?</span>
            <h2 className="mt-2.5 max-w-[720px] text-[clamp(35px,4vw,54px)] font-bold leading-[1.04] tracking-[-.045em] max-[680px]:text-[37px]">Öyrəndiklərini real iş mühitində sına</h2>
          </div>
          <ul className="my-[26px] grid list-none gap-3.5 p-0 text-[#3f4651]">
            {['Kursu tamamlayan tələbələr', 'Portfolio qurmaq istəyən yeni başlayanlar', 'Komanda təcrübəsi qazanmaq istəyənlər'].map((item) => (
              <li key={item} className="relative pl-8 before:absolute before:-top-0.5 before:left-0 before:grid before:size-[22px] before:place-items-center before:rounded-full before:bg-[#0869f7] before:text-[11px] before:font-black before:text-white before:content-['✓']">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
