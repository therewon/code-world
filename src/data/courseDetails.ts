export type CourseCategory =
  | "Development"
  | "Design"
  | "Data & QA"
  | "System & Support";

export type CourseSlug =
  | "frontend-development"
  | "qrafik-dizayn"
  | "ui-ux-dizayn"
  | "data-analitika-ve-qa"
  | "net-development"
  | "sistem-ve-it-destek";

export interface CourseDefinition {
  slug: CourseSlug;
  category: CourseCategory;
  salaryBands: Array<{
    range: string;
    level: "Junior" | "Middle" | "Senior";
  }>;
}

export const courseDetails: CourseDefinition[] = [
  {
    slug: "frontend-development",
    category: "Development",
    salaryBands: [
      { range: "900–1300 ₼", level: "Junior" },
      { range: "1300–2200 ₼", level: "Middle" },
      { range: "2200–3500 ₼", level: "Senior" },
    ],
  },
  {
    slug: "qrafik-dizayn",
    category: "Design",
    salaryBands: [
      { range: "600–800 ₼", level: "Junior" },
      { range: "800–1200 ₼", level: "Middle" },
      { range: "1200–1800 ₼", level: "Senior" },
    ],
  },
  {
    slug: "ui-ux-dizayn",
    category: "Design",
    salaryBands: [
      { range: "800–1200 ₼", level: "Junior" },
      { range: "1400–2300 ₼", level: "Middle" },
      { range: "2500–4000 ₼", level: "Senior" },
    ],
  },
  {
    slug: "data-analitika-ve-qa",
    category: "Data & QA",
    salaryBands: [
      { range: "800–1200 ₼", level: "Junior" },
      { range: "1400–2400 ₼", level: "Middle" },
      { range: "2500–4200 ₼", level: "Senior" },
    ],
  },
  {
    slug: "net-development",
    category: "Development",
    salaryBands: [
      { range: "1000–1500 ₼", level: "Junior" },
      { range: "1800–3000 ₼", level: "Middle" },
      { range: "3500–5500 ₼", level: "Senior" },
    ],
  },
  {
    slug: "sistem-ve-it-destek",
    category: "System & Support",
    salaryBands: [
      { range: "700–1000 ₼", level: "Junior" },
      { range: "1100–1800 ₼", level: "Middle" },
      { range: "2000–3200 ₼", level: "Senior" },
    ],
  },
];
