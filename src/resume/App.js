import React from 'react';

import {
    Container,
    Divider,
} from 'semantic-ui-react';

import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Projects from './projects/Projects';

import 'semantic-ui-css/semantic.min.css'
import './App.css'

function App() {
    return (
        <Container fluid className='App'>
            <About />
            <Divider />
            <Education />
            <Divider />
            <Experience />
            <Divider />
            <Projects />
        </Container>
    );
}

export default App;
