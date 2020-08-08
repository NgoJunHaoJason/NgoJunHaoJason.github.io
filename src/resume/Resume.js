import React from 'react';

import {
    useTranslation,
} from 'react-i18next';

import {
    Container,
    Divider,
    Button,
} from 'semantic-ui-react';

import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Projects from './projects/Projects';

import 'semantic-ui-css/semantic.min.css'
import './Resume.css'

function Resume() {
    const { t, i18n } = useTranslation();

    const translateButtonOnClick = () => {
        const language = (i18n.language === 'en')? 'cn' : 'en';
        i18n.changeLanguage(language);
    };

    return (
        <Container fluid className='App'>
            <Button
                floated='right'
                size='mini'
                onClick={() => translateButtonOnClick()}
            >
                {t('translate')}
            </Button>

            <About t={t} />
            <Divider />

            <Education t={t} />
            <Divider />

            <Experience t={t} />
            <Divider />

            <Projects t={t} />
        </Container>
    );
}

export default Resume;
