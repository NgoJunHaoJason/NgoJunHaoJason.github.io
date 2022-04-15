import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';

import './TranslateButton.css';

export default function TranslateButton() {
    const { t, i18n } = useTranslation('common');

    const translateButtonOnClick = () => {
        const language = (i18n.language === 'en') ? 'zh' : 'en';
        i18n.changeLanguage(language);
    };

    return (
        <>
            {/* this button does nothing, except to centre the header on mobile */}
            <Button
                className='TranslateCounterWeight'
                floated='left'
                size='mini'
            >
                {t('changeLanguage')}
            </Button>

            <Button
                data-testid='translate-button'
                floated='right'
                size='mini'
                onClick={() => translateButtonOnClick()}
            >
                {t('changeLanguage')}
            </Button>
        </>
    );
}
