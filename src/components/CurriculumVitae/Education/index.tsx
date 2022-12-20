import {
  faBrain,
  faGraduationCap,
  faLaptopCode,
  faRobot,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BulletedList from "components/shared/BulletedList";
import IconHeader from "components/shared/IconHeader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, Container, Grid, Icon } from "semantic-ui-react";
import DegreeSummary, { CertificateProps } from "components/CurriculumVitae/Education/DegreeSummary";

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

export const mastersSummaryTestId = "masters-summary";

export const MastersDegree = (): JSX.Element => {
  const { t } = useTranslation("education");
  return (
    <Grid stackable doubling padded="horizontally" data-testid="masters">
      <DegreeSummary
        testId={mastersSummaryTestId}
        university={t("masters.summary.university")}
        degree={t("masters.summary.degree")}
        date={t("masters.summary.date")}
      />
    </Grid>
  );
};

export const bachelorsSummaryTestId = "bachelors-summary";

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

  return (
    <Grid stackable doubling padded="horizontally" data-testid="bachelors">
      <DegreeSummary
        testId={bachelorsSummaryTestId}
        university={t("bachelors.summary.university")}
        degree={t("bachelors.summary.degree")}
        date={t("bachelors.summary.date")}
        grades={grades}
        certificate={certificate}
      />
      <BachelorsDetails />
    </Grid>
  );
};

export const bachelorsDetailsTestId = "bachelors-details";

export const BachelorsDetails = (): JSX.Element => {
  const { t } = useTranslation("education");
  const sections = t<any, BachelorsSectionProps[]>("bachelors.details", {
    returnObjects: true,
  });
  return (
    <Grid.Row data-testid={bachelorsDetailsTestId} columns={sections.length}>
      {sections.map((section: BachelorsSectionProps, index: number) => (
        <BachelorsSection {...section} key={index} />
      ))}
    </Grid.Row>
  );
};

export interface BachelorsSectionProps {
  header: string;
  icon: string;
  subheader: string;
  subjects: Array<string>;
}

const bachelorsSectionIcons: { [key: string]: IconDefinition } = {
  faLaptopCode: faLaptopCode,
  faRobot: faRobot,
  faBrain: faBrain,
};

export const BachelorsSection = ({
  header,
  icon,
  subheader,
  subjects,
}: BachelorsSectionProps): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <Grid.Column data-testid="section">
      <Accordion className="Card" styled>
        <Accordion.Title
          data-testid="section-title"
          active={active}
          onClick={() => setActive(!active)}
        >
          <Icon name="dropdown" />
          {header}:<br />
          &nbsp; &nbsp; &nbsp; {subheader} &nbsp;
          <FontAwesomeIcon icon={bachelorsSectionIcons[icon]} />
        </Accordion.Title>

        <Accordion.Content data-testid="subjects" active={active}>
          <BulletedList list={subjects} />
        </Accordion.Content>
      </Accordion>
    </Grid.Column>
  );
};
