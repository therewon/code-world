import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { CourseDetailPage } from "../pages/CourseDetailPage";
import { GraduatesPage } from "../pages/GraduatesPage";
import { HomePage } from "../pages/HomePage";
import { InternshipPage } from "../pages/InternshipPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { TrainersPage } from "../pages/TrainersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "kurslar/:slug", element: <CourseDetailPage /> },
      { path: "tecrube", element: <InternshipPage /> },
      { path: "telimciler", element: <TrainersPage /> },
      { path: "mezunlar", element: <GraduatesPage /> },
      { path: "daxil-ol", element: <LoginPage /> },
      { path: "qeydiyyat", element: <RegisterPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
