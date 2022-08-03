import {
  Container,
  Divider,
} from 'semantic-ui-react';

import About from 'Resume/About';
import Education from 'Resume/Education';
import Experience from 'Resume/Experience';
import Projects from 'Resume/Projects';
import TranslateButton from 'utils/TranslateButton';

import 'Resume/index.css'
import GitHubCorner from 'utils/GitHubCorner';

const Resume = (): JSX.Element => {
  return (
    <Container
      className='Resume TextContainer'
      data-testid='resume'
      fluid>
      <TranslateButton />
      <GitHubCorner />

      <About />
      <Divider />

      <Experience />
      <Divider />

      <Education />
      <Divider />

      <Projects />
    </Container>
  );
}

export default Resume;
