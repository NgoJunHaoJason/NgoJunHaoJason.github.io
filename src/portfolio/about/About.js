import React from 'react';

import {
    Card,
    Container,
    Header,
    Image,
    List,
} from 'semantic-ui-react';

import ProfilePicture from '../../assets/images/sciurus_96.png';
import './About.css';

function About() {
    return (
        <Container>
            <Header
                textAlign="center"
                size="huge"
            >
                <Header.Content>
                    <Image
                        className="ProfilePicture"
                        src={ProfilePicture}
                        size="tiny"
                        rounded
                    />
                    Jason Ngo
                </Header.Content>

                <Header.Subheader>
                    CS undergraduate at NTU
                </Header.Subheader>
            </Header>

            <Card centered>
                <Card.Content>
                    <Card.Description>
                        <List>
                            <List.Item>
                                <List.Icon name="mail" />
                                <List.Content>
                                    <a
                                        target="_blank"
                                        href="mailto:c170127@e.ntu.edu.sg"
                                    >
                                        c170127@e.ntu.edu.sg
                                    </a>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <List.Icon name="github" />
                                <List.Content>
                                    <a
                                        target="_blank"
                                        href="https://github.com/NgoJunHaoJason"
                                    >
                                        GitHub
                                    </a>
                                </List.Content>
                            </List.Item>

                            <List.Item>
                                <List.Icon name="linkedin" />
                                <List.Content>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/ngo-jun-hao-jason/"
                                    >
                                        LinkedIn
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
