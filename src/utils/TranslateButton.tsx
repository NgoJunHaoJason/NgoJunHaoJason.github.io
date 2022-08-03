import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';

import 'utils/TranslateButton.css';

const TranslateButton = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');

  const translateButtonOnClick = () => {
    const language = (i18n.language === 'en') ? 'zh' : 'en';
    i18n.changeLanguage(language);
  };

  return (
    <Button
      data-testid='translate-button'
      content={t('changeLanguage')}
      floated='left'
      size='mini'
      icon='world'
      labelPosition='left'
      onClick={() => translateButtonOnClick()}
    />
  );
}

export default TranslateButton;
