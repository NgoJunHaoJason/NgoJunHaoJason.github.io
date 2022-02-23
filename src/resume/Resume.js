import { useTranslation } from 'react-i18next';

import {
    Container,
    Divider,
    Button,
} from 'semantic-ui-react';

import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Projects from './projects/Projects';

import 'fomantic-ui-css/semantic.min.css'
import './Resume.css'

function Resume() {
    const { t, i18n } = useTranslation();

    const translateButtonOnClick = () => {
        const language = (i18n.language === 'en') ? 'cn' : 'en';
        i18n.changeLanguage(language);
    };

    return (
        <Container fluid className='Resume TextContainer'>
            {/* this button does nothing, except to centre the header on mobile */}
            <Button
                className='TranslateCounterWeight'
                floated='left'
                size='mini'
            >
                {t('language')}
            </Button>

            <Button
                floated='right'
                size='mini'
                onClick={() => translateButtonOnClick()}
            >
                {t('language')}
            </Button>

            <About />
            <Divider />

            <Experience t={t} />
            <Divider />

            <Education t={t} />
            <Divider />

            <Projects t={t} />
        </Container>
    );
}

export default Resume;
