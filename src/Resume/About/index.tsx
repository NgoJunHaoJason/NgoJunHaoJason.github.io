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

export default (): JSX.Element => {
  return (
    <Container>
      <AboutHeader />
      <AboutLinks />
    </Container>
  );
}

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
    <Card centered className='Card'>
      <Card.Content>
        <Card.Description>
          <List>
            {(t('items', { returnObjects: true }) as Array<AboutItemProps>).map(
              (item, index) => <AboutItem {...item} key={index} />
            )}
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

interface AboutItemProps {
  icon: SemanticICONS,
  url: string,
  text: string,
}

const AboutItem = ({
  icon,
  url,
  text,
}: AboutItemProps): JSX.Element => {
  return (
    <List.Item>
      <List.Icon name={icon} />
      <List.Content>
        <Link text={text} href={url} />
      </List.Content>
    </List.Item>
  );
}
