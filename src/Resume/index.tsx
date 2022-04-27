import {
  Container,
  Divider,
} from 'semantic-ui-react';

import About from 'Resume/About';
import Education from 'Resume/Education';
import Experience from 'Resume/Experience';
import Projects from 'Resume/Projects';
import Skills from 'Resume/Skills';
import TranslateButton from 'utils/TranslateButton';

import 'Resume/index.css'

export default function Resume() {
  return (
    <Container fluid className='Resume TextContainer'>
      <TranslateButton />

      <About />
      <Divider />

      <Experience />
      <Divider />

      <Education />
      <Divider />

      <Projects />
      <Divider />

      <Skills />
    </Container>
  );
}
