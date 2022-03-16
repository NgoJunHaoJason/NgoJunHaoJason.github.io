import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';
import { Fragment } from 'react';

import './TranslateButton.css';

export default function TranslateButton() {
    const { t, i18n } = useTranslation('common');

    const translateButtonOnClick = () => {
        const language = (i18n.language === 'en') ? 'zh' : 'en';
        i18n.changeLanguage(language);
    };
    console.log(i18n.language);
    return (
        <Fragment>
            {/* this button does nothing, except to centre the header on mobile */}
            <Button
                className='TranslateCounterWeight'
                floated='left'
                size='mini'
            >
                {t('changeLanguage')}
            </Button>

            <Button
                floated='right'
                size='mini'
                onClick={() => translateButtonOnClick()}
            >
                {t('changeLanguage')}
            </Button>
        </Fragment>
    );
}
