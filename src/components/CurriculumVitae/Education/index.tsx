import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Degree from "components/CurriculumVitae/Education/Degree";
import { DegreeDetailsSectionProps } from "components/CurriculumVitae/Education/DegreeDetails";
import { CertificateProps } from "components/CurriculumVitae/Education/DegreeSummary";
import IconHeader from "components/shared/IconHeader";
import { useTranslation } from "react-i18next";
import { Container } from "semantic-ui-react";

const Education = (): JSX.Element => {
  const { t } = useTranslation("education");
  return (
    <Container data-testid="education">
      <IconHeader icon={faGraduationCap} text={t("header")} />
      <MastersDegree />
      <BachelorsDegree />
    </Container>
  );
};

export default Education;

export const MastersDegree = (): JSX.Element => {
  const { t } = useTranslation("education");

  const sections: DegreeDetailsSectionProps[] = t<
    any,
    DegreeDetailsSectionProps[]
  >("masters.details", {
    returnObjects: true,
  });

  return (
    <Degree
      testId={mastersDegreeTestId}
      university={t("masters.summary.university")}
      degreeName={t("masters.summary.degree")}
      date={t("masters.summary.date")}
      sections={sections}
    />
  );
};

export const mastersDegreeTestId = "masters-degree";

export const BachelorsDegree = (): JSX.Element => {
  const { t } = useTranslation("education");

  const grades = `${t("bachelors.summary.honours")}, ${t(
    "bachelors.summary.gpa"
  )}`;
  const certificate: CertificateProps = {
    label: t("bachelors.certificate.label"),
    certificateLink: "./documents/degree_transcript_ngo_jun_hao_jason.opencert",
    verify: t("bachelors.certificate.verify"),
    verificationLink: "https://www.opencerts.io/",
  };
  const sections: DegreeDetailsSectionProps[] = t<
    any,
    DegreeDetailsSectionProps[]
  >("bachelors.details", {
    returnObjects: true,
  });

  return (
    <Degree
      testId={bachelorsDegreeTestId}
      university={t("bachelors.summary.university")}
      degreeName={t("bachelors.summary.degree")}
      date={t("bachelors.summary.date")}
      grades={grades}
      certificate={certificate}
      sections={sections}
    />
  );
};

export const bachelorsDegreeTestId = "bachelors-degree";
