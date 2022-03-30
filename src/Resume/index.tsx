import {
    Container,
    Divider,
} from 'semantic-ui-react';

import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import TranslateButton from '../utils/TranslateButton';

import 'fomantic-ui-css/semantic.min.css'
import './index.css'

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
