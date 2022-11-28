import { Container, Divider } from "semantic-ui-react";

import About from "components/Resume/About";
import Education from "components/Resume/Education";
import Experience from "components/Resume/Experience";
import Projects from "components/Resume/Projects";
import Favourites from "components/Resume/Favourites";
import GitHubCorner from "components/Resume/GitHubCorner";
import TranslateButton from "components/Resume/TranslateButton";

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
