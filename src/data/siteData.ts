export type CourseCategory =
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

export interface Person {
  name: string;
  position: string;
  image: string;
  tags: string[];
}



export type CategoryFilter = "Hamısı" | CourseCategory;

export const categories: CategoryFilter[] = [
  "Hamısı",
  "Development",
  "Design",
  "Data & QA",
  "System & Support",
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

export const graduates: Person[] = [
  {
    name: "Nigar Quliyeva",
    position: "Frontend Developer · Paşa Bank",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85",
    tags: ["Məzun 2025"],
  },
  {
    name: "Leyla İsmayılova",
    position: "UI/UX Designer · Kapital Bank",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    tags: ["Məzun 2025"],
  },
  {
    name: "Murad Rzayev",
    position: "QA Engineer · Birbank",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
    tags: ["Məzun 2024"],
  },
];