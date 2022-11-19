import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "semantic-ui-react";

interface IconHeaderProps {
  icon: IconDefinition;
  text: string;
}

const IconHeader = ({ icon, text }: IconHeaderProps): JSX.Element => {
  return (
    <Header size="large" data-testid="icon-header">
      <Header.Content>
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {text}
      </Header.Content>
    </Header>
  );
};

export default IconHeader;
