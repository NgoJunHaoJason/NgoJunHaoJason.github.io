import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "semantic-ui-react";

interface IconHeaderProps {
    icon: IconDefinition;
    text: string;
}

export default function IconHeader({ icon, text }: IconHeaderProps) {
    return (
        <Header size='large'>
            <Header.Content>
                <FontAwesomeIcon icon={icon} />
                &nbsp;
                {text}
            </Header.Content>
        </Header>
    );
}
