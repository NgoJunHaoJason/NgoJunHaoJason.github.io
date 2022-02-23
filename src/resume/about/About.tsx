import { useTranslation } from 'react-i18next';
import {
    Card,
    Container,
    Header,
    Image,
    List
} from 'semantic-ui-react';
import ProfilePicture from '../../assets/images/profile_picture.png';
import './About.css';

export default function About() {
    return (
        <Container>
            <AboutHeader />
            <AboutLinks />
        </Container>
    );
}

function AboutHeader() {
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

function AboutLinks() {
    const { t } = useTranslation('about');
    return (
        <Card centered className='Card'>
            <Card.Content>
                <Card.Description>
                    <List>
                        {(t('items', { returnObjects: true }) as []).map(
                            (item: any, index: number) => <AboutLink item={item} key={index} />
                        )}
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

function AboutLink({ item, key }: any) {
    return (
        <List.Item key={key}>
            <List.Icon name={item.icon} />
            <List.Content>
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={item.url}
                >
                    {item.text}
                </a>
            </List.Content>
        </List.Item>
    );
}
