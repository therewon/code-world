import DesktopSkeleton from "../assets/desktop-skeleton.png";
import MobileSkeleton from "../assets/mobile-skeleton.png";
import "../styles/application-steps-test.css";
import { useTranslation } from "react-i18next";

export function ApplicationStepsTest() {
  const { t } = useTranslation();
  const applicationSteps = t("internshipPage.applicationSteps", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  return (
    <div className="application-steps-test">
      <picture aria-hidden="true">
        <source media="(min-width: 1024px)" srcSet={DesktopSkeleton} />
        <img
          className="application-steps-test__skeleton"
          src={MobileSkeleton}
          alt=""
        />
      </picture>

      <ol className="application-steps-test__list">
        {applicationSteps.map((step, index) => (
          <li
            className={`application-steps-test__item application-steps-test__item--${index + 1}`}
            key={step.title}
          >
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
