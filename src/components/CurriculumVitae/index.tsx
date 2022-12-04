import { Container, Divider } from "semantic-ui-react";

import About from "components/CurriculumVitae/About";
import Education from "components/CurriculumVitae/Education";
import Experience from "components/CurriculumVitae/Experience";
import Projects from "components/CurriculumVitae/Projects";
import Favourites from "components/CurriculumVitae/Favourites";
import GitHubCorner from "components/CurriculumVitae/GitHubCorner";
import TranslateButton from "components/CurriculumVitae/TranslateButton";

import "./index.css";

const Resume = (): JSX.Element => {
  return (
    <Container className="Resume TextContainer" data-testid="resume" fluid>
      <TranslateButton />
      <GitHubCorner />

      <About />
      <Divider />

      <Experience />
      <Divider />

      <Education />
      <Divider />

      <Favourites />
      <Divider />

      <Projects />
    </Container>
  );
};

export default Resume;
