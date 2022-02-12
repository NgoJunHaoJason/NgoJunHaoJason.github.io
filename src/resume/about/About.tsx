import {
    Card,
    Container,
    Header,
    Image,
    List
} from 'semantic-ui-react';
import ProfilePicture from '../../assets/images/profile_picture.png';
import './About.css';

export default function About({ t }: any) {
    return (
        <Container>
            <AboutHeader t={t} />
            <AboutLinks t={t} />
        </Container>
    );
}

function AboutHeader({ t }: any) {
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
                {t('about.name')}
            </Header.Content>

            <Header.Subheader>
                {t('about.description')}
            </Header.Subheader>
        </Header>
    );
}

function AboutLinks({ t }: any) {
    return (
        <Card centered className='Card'>
            <Card.Content>
                <Card.Description>
                    <List>
                        {t('about.items', { returnObjects: true }).map(
                            (item: any, index: number) => (
                                <List.Item key={index}>
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
                            )
                        )}
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    );
}
