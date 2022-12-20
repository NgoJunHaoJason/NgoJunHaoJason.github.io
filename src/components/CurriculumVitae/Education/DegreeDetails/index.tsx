import {
  faBrain,
  faLaptopCode,
  faRobot,
  faVrCardboard,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BulletedList from "components/shared/BulletedList";
import { useState } from "react";
import { Accordion, Grid, Icon, SemanticWIDTHS } from "semantic-ui-react";

interface DegreeDetailsProps {
  testId: string;
  sections: DegreeDetailsSectionProps[];
}

const DegreeDetails = ({
  testId,
  sections,
}: DegreeDetailsProps): JSX.Element => (
  <Grid.Row data-testid={testId} columns={sections.length as SemanticWIDTHS}>
    {sections.map((section: DegreeDetailsSectionProps, index: number) => (
      <DegreeDetailsSection {...section} key={index} />
    ))}
  </Grid.Row>
);

export default DegreeDetails;

export interface DegreeDetailsSectionProps {
  header: string;
  icon: string;
  subheader: string;
  subjects: Array<string>;
}

export const DegreeDetailsSection = ({
  header,
  icon,
  subheader,
  subjects,
}: DegreeDetailsSectionProps): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <Grid.Column data-testid="section">
      <Accordion className="Card" styled>
        <Accordion.Title
          data-testid={sectionTitleTestId}
          active={active}
          onClick={() => setActive(!active)}
        >
          <Icon name="dropdown" />
          {header}:<br />
          &nbsp; &nbsp; &nbsp; {subheader} &nbsp;
          <FontAwesomeIcon icon={bachelorsSectionIcons[icon]} />
        </Accordion.Title>

        <Accordion.Content data-testid={subjectsTestId} active={active}>
          <BulletedList list={subjects} />
        </Accordion.Content>
      </Accordion>
    </Grid.Column>
  );
};

export const sectionTitleTestId = "section-title";
export const subjectsTestId = "subjects";

const bachelorsSectionIcons: { [key: string]: IconDefinition } = {
  faVrCardboard: faVrCardboard,
  faLaptopCode: faLaptopCode,
  faRobot: faRobot,
  faBrain: faBrain,
};
