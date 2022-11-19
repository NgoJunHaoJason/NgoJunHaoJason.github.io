import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";

import "components/TranslateButton/index.css";

const TranslateButton = (): JSX.Element => {
  const { t, i18n } = useTranslation("common");

  const translateButtonOnClick = () => {
    const language = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Button // shows findDOMNode warning in console
        data-testid="translate-button"
        content={t("changeLanguage")}
        floated="left"
        size="mini"
        icon="world"
        labelPosition="left"
        onClick={() => translateButtonOnClick()}
      />

      <Button // to centre profile picture on mobile
        data-testid="translate-counterweight"
        content={t("changeLanguage")}
        floated="right"
        size="mini"
        icon="world"
        labelPosition="left"
        className="TranslateCounterweight"
      />
    </>
  );
};

export default TranslateButton;
