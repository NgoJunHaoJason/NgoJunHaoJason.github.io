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
                            <List.Item>
                                <List.Icon name='mail' />
                                <List.Content>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='mailto:njhjason@protonmail.com'
                                    >
                                        njhjason@protonmail.com
                                    </a>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <List.Icon name='github' />
                                <List.Content>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://github.com/NgoJunHaoJason'
                                    >
                                        {t('about.github')}
                                    </a>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <List.Icon name='linkedin' />
                                <List.Content>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.linkedin.com/in/ngo-jun-hao-jason/'
                                    >
                                        {t('about.linkedin')}
                                    </a>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <List.Icon name='file pdf' />
                                <List.Content>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io/tree/develop/documents/resume_ngo_jun_hao_jason_no_phone.pdf'
                                    >
                                        {t('about.pdfVersion')}
                                    </a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        </Container>
    );
}

export default About;
