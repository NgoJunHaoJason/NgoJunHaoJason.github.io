import React from 'react';

import {
    Card,
    Container,
    Header,
    Label,
    Icon,
} from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTasks,
} from '@fortawesome/free-solid-svg-icons';

function Projects() {
    return (
        <Container>
            <Header
                size='large'
            >
                <Header.Content>
                    <FontAwesomeIcon icon={faTasks} />
                    &nbsp;
                    Projects
                </Header.Content>
            </Header>

            <Card.Group itemsPerRow={2} centered doubling stackable>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='github' />
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/NgoJunHaoJason/CZ4041'
                            >
                                Machine Learning Group Project
                            </a>
                        </Card.Header>
                        <Card.Description>
                            Kaggle Challenge (IEEE-CIS Fraud Detection)
                        </Card.Description>
                        <Card.Meta>
                            Jan 2020 – Mar 2020
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    Performed data preprocessing, model evaluation and ensemble learning to train a model which
                                    predicts if a transaction is fraudulent
                                </li>
                            </ul>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <Label.Group>
                            <Label>Jupyter Notebook</Label>
                            <Label>Pandas</Label>
                            <Label>Scikit-Learn</Label>
                            <Label>LightGBM</Label>
                        </Label.Group>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='github' />
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/NgoJunHaoJason/CZ4001'
                            >
                                Virtual Reality Group Project
                            </a>
                        </Card.Header>
                        <Card.Description>
                            &nbsp;
                        </Card.Description>
                        <Card.Meta>
                            Jan 2020 – Mar 2020
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    Set up the project with proper project management and workflow
                                </li>
                                <li>
                                    Developed a virtual reality game where the player hunts animals for points
                                </li>
                            </ul>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <Label.Group>
                            <Label>Unity</Label>
                        </Label.Group>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            Undergraduate Research Experience on Campus (URECA)
                        </Card.Header>
                        <Card.Description>
                            An Augmented Virtuality Approach To 3D Videoconferencing
                        </Card.Description>
                        <Card.Meta>
                            Aug 2018 – Jul 2019
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    Carried out research on narrowcasting
                                </li>
                                <li>
                                    Developed a software for real-time audio transmission in a 3D virtual environment,
                                    with narrowcasting-based privacy controls
                                </li>
                            </ul>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <Label.Group>
                            <Label>Unity</Label>
                            <Label>Photon Unity Networking</Label>
                            <Label>Photon Voice</Label>
                        </Label.Group>
                    </Card.Content>
                </Card>

                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name='github' />
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://github.com/NgoJunHaoJason/CZ2006'
                            >
                                Software Engineering Group Project
                            </a>
                        </Card.Header>
                        <Card.Description>
                            &nbsp;
                        </Card.Description>
                        <Card.Meta>
                            Jan 2019 – Apr 2019
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    Handled part of back-end development for a mobile application that finds events in Singapore
                                </li>
                            </ul>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <Label.Group>
                            <Label>Flutter</Label>
                            <Label>Postman</Label>
                        </Label.Group>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Container>
    );
}

export default Projects;