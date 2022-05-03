import { useTranslation } from 'react-i18next';
import {
  Card,
  Container,
  Header,
  Image,
  List,
  SemanticICONS
} from 'semantic-ui-react';
import ProfilePicture from 'assets/images/profile_picture.png';
import Link from 'utils/Link';
import 'Resume/About/index.css';

const About = (): JSX.Element => {
  return (
    <Container>
      <AboutHeader />
      <AboutLinks />
    </Container>
  );
}

export default About;

const AboutHeader = (): JSX.Element => {
  const { t } = useTranslation('about');
  return (
    <Header
      textAlign='center'
      size='huge'>
      <Header.Content>
        <Image
          className='ProfilePicture'
          src={ProfilePicture}
          size='tiny'
          rounded
          bordered
        />
        {t('name')}
      </Header.Content>

      <Header.Subheader>
        {t('description')}
      </Header.Subheader>
    </Header>
  );
}

const AboutLinks = (): JSX.Element => {
  const { t } = useTranslation('about');
  return (
    <Card
      centered
      className='Card'>
      <Card.Content>
        <Card.Description>
          <List>
            {t<any, AboutItemProps[]>('items', { returnObjects: true }).map(
              (item: AboutItemProps, index: number) => <AboutItem {...item} key={index} />
            )}
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export interface AboutItemProps {
  icon: SemanticICONS,
  url: string,
  text: string,
}

export const AboutItem = ({
  icon,
  url,
  text,
}: AboutItemProps): JSX.Element => {
  return (
    <List.Item data-testid='about-item'>
      <List.Icon name={icon} />
      <List.Content>
        <Link text={text} href={url} />
      </List.Content>
    </List.Item>
  );
}
