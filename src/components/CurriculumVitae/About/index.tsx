import ProfilePicture from "assets/images/profile_picture.png";
import Link from "components/shared/Link";
import { useTranslation } from "react-i18next";
import {
  Card,
  Container,
  Header,
  Image,
  List,
  SemanticICONS,
} from "semantic-ui-react";
import "./index.css";

const About = (): JSX.Element => {
  return (
    <Container data-testid="about">
      <AboutHeader />
      <AboutLinks />
    </Container>
  );
};

export default About;

export const AboutHeader = (): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Header data-testid="about-header" textAlign="center" size="huge">
      <Header.Content>
        <Image
          className="ProfilePicture"
          src={ProfilePicture}
          size="tiny"
          rounded
          bordered
        />
        {t("name")}
      </Header.Content>

      <Header.Subheader>
        <Link
          content={t("description")}
          href="https://manifesto.softwarecraftsmanship.org/"
        />
      </Header.Subheader>
    </Header>
  );
};

export const AboutLinks = (): JSX.Element => {
  const { t } = useTranslation("about");
  return (
    <Card data-testid="about-links" className="Card" centered>
      <Card.Content>
        <Card.Description>
          <List>
            {t<any, AboutItemProps[]>("items", { returnObjects: true }).map(
              (item: AboutItemProps, index: number) => (
                <AboutItem {...item} key={index} />
              )
            )}
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export interface AboutItemProps {
  icon: SemanticICONS;
  url: string;
  text: string;
}

export const AboutItem = ({ icon, url, text }: AboutItemProps): JSX.Element => {
  return (
    <List.Item data-testid="about-item">
      <List.Icon name={icon} />
      <List.Content>
        <Link content={text} href={url} />
      </List.Content>
    </List.Item>
  );
};
