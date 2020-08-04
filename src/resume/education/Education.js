import React from 'react';

import {
    Container,
    Header,
    Grid,
    Item,
    List,
} from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop,
    faRobot,
    faBrain,
} from '@fortawesome/free-solid-svg-icons';

function Education() {
    return (
        <Container>
            <Header
                size='large'
            >
                <Header.Content>
                    Education
                </Header.Content>
            </Header>

            <Container>

            
            <Grid stackable doubling padded='horizontally'>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Nanyang Technological University, Singapore
                                    </Item.Header>
                                    <Item.Meta>
                                        Aug 2017 – May 2021 (Expected)
                                    </Item.Meta>
                                    <Item.Description>
                                        Bachelor of Engineering (Computer Science)
                                    </Item.Description>
                                    <Item.Extra>
                                        Expected Honours (Distinction), CGPA: 4.38 / 5.00
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} divided>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Core
                                    </Item.Header>
                                    <Item.Meta>
                                        <FontAwesomeIcon icon={faLaptop} />
                                        &nbsp;
                                        Computer Science
                                    </Item.Meta>
                                    <Item.Description>
                                        <List bulleted>
                                            <List.Item>
                                                Calculus
                                            </List.Item>
                                            <List.Item>
                                                Linear Algebra
                                            </List.Item>
                                            <List.Item>
                                                Sequences and Series
                                            </List.Item>
                                            <List.Item>
                                                Probability and Statistics
                                            </List.Item>
                                            <List.Item>
                                                Discrete Mathematics
                                            </List.Item>
                                            <List.Item>
                                                Computational Thinking
                                            </List.Item>
                                            <List.Item>
                                                Computer Organisation and Architecture
                                            </List.Item>
                                            <List.Item>
                                                Data Structures
                                            </List.Item>
                                            <List.Item>
                                                Algorithms
                                            </List.Item>
                                            <List.Item>
                                                Object-Oriented Design and Programming
                                            </List.Item>
                                            <List.Item>
                                                Computer Graphics
                                            </List.Item>
                                            <List.Item>
                                                Human-Computer Interaction
                                            </List.Item>
                                            <List.Item>
                                                Operating Systems
                                            </List.Item>
                                            <List.Item>
                                                Software Engineering
                                            </List.Item>
                                            <List.Item>
                                                Introduction to Databases
                                            </List.Item>
                                            <List.Item>
                                                Software Systems Analysis and Design
                                            </List.Item>
                                            <List.Item>
                                                Net-Centric Computing
                                            </List.Item>
                                        </List>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Specialisation
                                    </Item.Header>
                                    <Item.Meta>
                                        <FontAwesomeIcon icon={faRobot} />
                                        &nbsp;
                                        Artificial Intelligence
                                    </Item.Meta>
                                    <Item.Description>
                                        <List bulleted>
                                            <List.Item>
                                                Machine Learning
                                            </List.Item>
                                            <List.Item>
                                                Virtual and Augmented Reality
                                            </List.Item>
                                            <List.Item>
                                                Intelligent Agents
                                            </List.Item>
                                        </List>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>

                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        Minor (in-progress)
                                    </Item.Header>
                                    <Item.Meta>
                                        <FontAwesomeIcon icon={faBrain} />
                                        &nbsp;
                                        Psychology
                                    </Item.Meta>
                                    <Item.Description>
                                        <List bulleted>
                                            <List.Item>
                                                Introduction to Psychology
                                            </List.Item>
                                            <List.Item>
                                                Fundamentals of Social Science Research
                                            </List.Item>
                                            <List.Item>
                                                Cognitive Psychology
                                            </List.Item>
                                        </List>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </Container>
    );
}

export default Education;