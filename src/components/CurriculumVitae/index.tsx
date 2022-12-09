import { Container, Divider } from "semantic-ui-react";

import About from "components/CurriculumVitae/About";
import Education from "components/CurriculumVitae/Education";
import Experience from "components/CurriculumVitae/Experience";
import Favourites from "components/CurriculumVitae/Favourites";
import GitHubCorner from "components/CurriculumVitae/GitHubCorner";
import Projects from "components/CurriculumVitae/Projects";
import TranslateButton from "components/CurriculumVitae/TranslateButton";

import "./index.css";

const CurriculumVitae = (): JSX.Element => {
  return (
    <Container
      data-testid="curriculum-vitae"
      className="CurriculumVitae TextContainer"
      fluid
    >
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

export default CurriculumVitae;
