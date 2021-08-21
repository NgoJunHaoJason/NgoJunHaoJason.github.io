import React from 'react';

import {
    Card,
    Container,
    Header,
    Image,
    List,
} from 'semantic-ui-react';

import ProfilePicture from '../../assets/images/smiley_face.jpg';
import './About.css';

function About(props) {
    const { t } = props;

    return (
        <Container>
            <Header
                textAlign='center'
                size='huge'
            >
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

            <Card centered>
                <Card.Content>
                    <Card.Description>
                        <List>
                            {t('about.items', { returnObjects: true }).map(item => (
                                <List.Item>
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
                            ))}
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default About;
