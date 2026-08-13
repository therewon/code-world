import Mentor1 from "../assets/mentor-1.png"
import Mentor2 from "../assets/mentor-2.png"
import Mentor3 from "../assets/mentor-3.png"
import Graduate1 from "../assets/graduate-1.png"
import Graduate2 from "../assets/graduate-2.png"
import Graduate3 from "../assets/graduate-3.png"
import Intern1 from "../assets/intern-1.png"
import Intern2 from "../assets/intern-2.png"
import Intern3 from "../assets/intern-3.png"
import Intern4 from "../assets/intern-4.png"
import Intern5 from "../assets/intern-5.png"

export type CourseCategory =
  | "Development"
  | "Design"
  | "Data & QA"
  | "System & Support";

export type MentorCategory =
  | "Development"
  | "Design"
  | "Data & QA"
  | "System & Support";

export type CourseColor =
  | "blue"
  | "orange"
  | "purple"
  | "green"
  | "navy"
  | "cyan";

export interface Course {
  title: string;
  category: CourseCategory;
  duration: string;
  schedule: string;
  icon: string;
  color: CourseColor;
}

export interface Mentor {
  id: number;
  name: String;
  image: string;
  category: string;
  position: string;
  skills: string[];
  linkedin: string;
}

export interface Person {
  name: string;
  position: string;
  image: string;
  tags: string[];
}

export interface Graduate {
  id: number;
  name: string;
  image: string;
  position: string;
  company: string;
  github: string;
  behance: string;
}

export interface InternshipStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Education {
  id: number;
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: number;
  name: string;
  position: string;
  image: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    name: "Günel Hüseynova",
    position: "UX/UI dizayner",
    image: "/images/gunel-huseynova.png",
  },
  {
    id: 2,
    name: "Məhəmməd Məmmədzadə",
    position: "Qrafik dizayner",
    image: "/images/mehemmed-memmedzade.png",
  },
  {
    id: 3,
    name: "Nərmin Bədəlova",
    position: "UX/UI dizayner",
    image: "/images/nermin-bedelova.png",
  },
  {
    id: 4,
    name: "Əli İmanov",
    position: "UX/UI dizayner",
    image: "/images/eli-imanov.png",
  },
  {
    id: 5,
    name: "Nərmin Əlizadə",
    position: "Qrafik dizayner",
    image: "/images/nermin-elizade.png",
  },
];

export const educations: Education[] = [
  {
    id: 1,
    label: "Frontend Development",
    value: "frontend",
  },
  {
    id: 2,
    label: "Backend Development",
    value: "backend",
  },
  {
    id: 3,
    label: "UI/UX Design",
    value: "ui-ux",
  },
  {
    id: 4,
    label: "Data Analytics",
    value: "data-analytics",
  },
  {
    id: 5,
    label: "Cyber Security",
    value: "cyber-security",
  },
];

export const internshipSteps: InternshipStep[] = [
  {
    id: 1,
    number: "01",
    title: "3 aylıq təcrübə proqramı",
    description:
      "Təcrübə proqramı ümumilikdə 3 ay davam edir. Bu müddət ərzində tələbələr bir neçə real layihədə iştirak edir, peşəkar iş prosesini mənimsəyir və əmək bazarına hazır portfolio formalaşdırırlar.",
    image: Intern1,
  },
  {
    id: 2,
    number: "02",
    title: "Layihəyə qəbul",
    description:
      "Tələbələr bacarıq səviyyələrinə uyğun real layihəyə təyin edilir və komandanın bir üzvü kimi təcrübə proqramına başlayırlar.",
    image: Intern2,
  },
  {
    id: 3,
    number: "03",
    title: "Layihə brifi",
    description:
      "Layihənin məqsədi, tələbləri, texniki tapşırıqları və iş planı ətraflı şəkildə təqdim olunur ki, tələbə layihəyə düzgün yanaşa bilsin.",
    image: Intern3,
  },
  {
    id: 4,
    number: "04",
    title: "Mentor dəstəyi",
    description:
      "Tələbələr bütün proses boyunca mentorun rəhbərliyi altında çalışırlar. Mentor görülən işləri mütəmadi olaraq yoxlayır, rəy və düzəlişlər verir, peşəkar yanaşmaları izah edir və tələbəni düzgün istiqamətləndirir.",
    image: Intern4,
  },
  {
    id: 5,
    number: "05",
    title: "Sertifikat",
    description:
      "Təcrübə proqramını uğurla tamamladıqdan sonra sizə rəsmi sertifikat təqdim olunacaq. Bu sertifikat proqram ərzində əldə etdiyiniz bilik və praktiki təcrübəni, həmçinin real layihələrdə iştirakınızı təsdiqləyəcək.",
    image: Intern5,
  },
];

export const graduates: Graduate[] = [
  {
    id: 1,
    name: "Günel Hüseynova",
    image: Graduate1,
    position: "Senior .NET Developer",
    company: "Pasha Bank",
    github: "#",
    behance: "#",
  },
  {
    id: 2,
    name: "Günel Hüseynova",
    image: Graduate2,
    position: "Senior .NET Developer",
    company: "Pasha Bank",
    github: "#",
    behance: "#",
  },
  {
    id: 3,
    name: "Günel Hüseynova",
    image: Graduate3,
    position: "Senior .NET Developer",
    company: "Pasha Bank",
    github: "#",
    behance: "#",
  },
];


export type CategoryFilter = "Hamısı" | CourseCategory;
export type MentorFilter = "Hamısı" | MentorCategory;

export const categories: CategoryFilter[] = [
  "Hamısı",
  "Development",
  "Design",
  "Data & QA",
  "System & Support",
];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Günel Hüseynova",
    image: Mentor1,
    position: "Senior .NET Developer",
    category: "Development",
    skills: ["C#", ".NET", "Azure", "SQL"],
    linkedin: "#",
  },
  {
    id: 2,
    name: "Aytac Məmmədzadə",
    image: Mentor2,
    position: "Senior .NET Developer",
    category: "Development",
    skills: ["C#", ".NET", "Azure", "SQL"],
    linkedin: "#",
  },
  {
    id: 3,
    name: "Səbinə Əliyeva",
    image: Mentor3,
    position: "Senior .NET Developer",
    category: "Development",
    skills: ["C#", ".NET", "Azure", "SQL"],
    linkedin: "#",
  },
];

export const courses: Course[] = [
  {
    title: "Frontend Development",
    category: "Development",
    duration: "6 ay",
    schedule: "Həftədə 3 gün",
    icon: "</>",
    color: "blue",
  },
  {
    title: "Qrafik dizayn",
    category: "Design",
    duration: "6 ay",
    schedule: "Həftədə 3 gün",
    icon: "Ai",
    color: "orange",
  },
  {
    title: "UI/UX dizayn",
    category: "Design",
    duration: "6 ay",
    schedule: "Həftədə 3 gün",
    icon: "UX",
    color: "purple",
  },
  {
    title: "Data Analitika və QA",
    category: "Data & QA",
    duration: "5 ay",
    schedule: "Həftədə 3 gün",
    icon: "QA",
    color: "green",
  },
  {
    title: ".NET Development",
    category: "Development",
    duration: "7 ay",
    schedule: "Həftədə 3 gün",
    icon: ".NET",
    color: "navy",
  },
  {
    title: "Sistem və IT dəstək",
    category: "System & Support",
    duration: "4 ay",
    schedule: "Həftədə 2 gün",
    icon: "IT",
    color: "cyan",
  },
];

export const trainers: Person[] = [
  {
    name: "Günel Hüseynova",
    position: "Senior .NET Developer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    tags: ["C#", ".NET", "Azure", "SQL"],
  },
  {
    name: "Aytac Məmmədzadə",
    position: "Senior Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    name: "Sabina Əliyeva",
    position: "Lead Product Designer",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
    tags: ["Figma", "UX", "Design System"],
  },
];
