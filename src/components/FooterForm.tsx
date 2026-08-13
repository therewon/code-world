import ArrowImage from "../assets/arrow-image.png"
import PlusImage from "../assets/plus-image.png"
import { educations } from "../data/siteData";
import { ChevronDown } from "lucide-react";

const FooterForm = () => {
  return (
    <section className="md:pb-25 pt-7.5 rounded-b-3xl translate-y-6 bg-white">
        <div className="max-w-7xl lg:mx-auto sm:mx-4 relative md:flex min-h-100  justify-between rounded-3xl bg-[#242424] md:p-10 p-4">
          <img src={ArrowImage} alt="" className="absolute md:left-2/5  md:-bottom-15 right-0 max-md:top-0 md:rotate-250 rotate-180 md:w-50 w-30"/>
          <img src={PlusImage} alt="" className="absolute md:left-2/5 left-2/5 -top-10  md:w-50 w-20"/>
          <div>
            <h2 className="mt-2.5 md:max-w-2/3 text-[clamp(35px,4vw,44px)] font-bold leading-[1.2] mb-4 max-[680px]:text-[22px] text-white">Gələcəyini <br className="md:block"/> qurmağa hazırsan?</h2>
            <p className="text-[#9A9A9A] leading-normal md:w-2/3 max-sm:text-sm mb-12">Məlumatlarını qeyd et, komandamız <br className="md:block"/> əlaqə saxlayaraq bütün suallarını cavablandırsın.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 md:w-1/2 z-10">
            <form action="">
              <input type="text" placeholder="Ad soyadınız" className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl mb-3" />
              <input type="text" placeholder="+994 XX XXX XX XX" className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl mb-3" />
              <div className="relative mb-6">
                <select
                  name="course"
                  defaultValue=""
                  className="px-4 py-5 w-full bg-[#F2F3F5] rounded-xl appearance-none pr-12"
                >
                  <option value="" disabled>
                    Tədrisi seçin
                  </option>

                  {educations.map((education) => (
                    <option key={education.id} value={education.value}>
                      {education.label}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
                />
              </div>
              <button type="submit" className="px-4 py-5 w-full bg-[#015CE9] rounded-4xl text-white">Müraciət et</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default FooterForm