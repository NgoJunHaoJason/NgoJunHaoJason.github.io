import {
  faBrain,
  faGraduationCap,
  faLaptopCode,
  faRobot,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BulletedList from "components/shared/BulletedList";
import IconHeader from "components/shared/IconHeader";
import Link from "components/shared/Link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Accordion, Container, Grid, Icon, Item } from "semantic-ui-react";

const Education = (): JSX.Element => {
  const { t } = useTranslation("education");
  return (
    <Container data-testid="education">
      <IconHeader icon={faGraduationCap} text={t("header")} />
      <University />
    </Container>
  );
};

export default Education;

export const University = (): JSX.Element => {
  return (
    <Grid stackable doubling padded="horizontally" data-testid="university">
      <UniversitySummary />
      <UniversityDetails />
    </Grid>
  );
};

export const UniversitySummary = (): JSX.Element => {
  const { t } = useTranslation("education");
  return (
    <Grid.Row data-testid="university-summary" columns={1}>
      <Grid.Column>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>{t("university.name")}</Item.Header>
              <Item.Meta>{t("university.date")}</Item.Meta>
              <Item.Description>{t("university.degree")}</Item.Description>
              <Item.Description>
                {t("university.honours")}, {t("university.gpa")}
              </Item.Description>
              <Certificate />
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    </Grid.Row>
  );
};

const Certificate = (): JSX.Element => {
  const { t } = useTranslation("education");
  return (
    <Item.Extra data-testid="certificate">
      <Link content={t("university.cert")} href={t("university.certURL")} />
      (
      <Link content={t("university.verify")} href={t("university.verifyURL")} />
      )
    </Item.Extra>
  );
};

export const UniversityDetails = (): JSX.Element => {
  const { t } = useTranslation("education");
  const sections = t<any, SectionProps[]>("sections", { returnObjects: true });
  return (
    <Grid.Row data-testid="university-details" columns={sections.length}>
      {sections.map((section: SectionProps, index: number) => (
        <Section {...section} key={index} />
      ))}
    </Grid.Row>
  );
};

export interface SectionProps {
  header: string;
  icon: string;
  subheader: string;
  subjects: Array<string>;
}

const sectionIcons: { [key: string]: IconDefinition } = {
  faLaptopCode: faLaptopCode,
  faRobot: faRobot,
  faBrain: faBrain,
};

export const Section = ({
  header,
  icon,
  subheader,
  subjects,
}: SectionProps): JSX.Element => {
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
          <FontAwesomeIcon icon={sectionIcons[icon]} />
        </Accordion.Title>

        <Accordion.Content data-testid="subjects" active={active}>
          <BulletedList list={subjects} />
        </Accordion.Content>
      </Accordion>
    </Grid.Column>
  );
};
