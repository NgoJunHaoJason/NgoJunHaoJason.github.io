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
    faGraduationCap,
    faLaptopCode,
    faRobot,
    faBrain,
} from '@fortawesome/free-solid-svg-icons';

const sectionIcons = {
    'faLaptopCode': faLaptopCode,
    'faRobot': faRobot,
    'faBrain': faBrain,
};

function University(props) {
    const { university } = props;

    return (
        <Grid.Column>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>
                            {university.name}
                        </Item.Header>
                        <Item.Meta>
                            {university.date}
                        </Item.Meta>
                        <Item.Description>
                            {university.degree}
                        </Item.Description>
                        <Item.Description>
                            {university.honours}, {university.gpa}
                        </Item.Description>
                        <Item.Extra>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={university.certURL}
                            >
                                {university.cert}
                            </a>
                            (<a
                                target='_blank'
                                rel='noopener noreferrer'
                                href={university.verifyURL}
                            >
                                {university.verify}
                            </a>)
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Grid.Column>
    );
}

function Section(props) {
    const { section } = props;

    return (
        <Grid.Column>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>
                            {section.header}
                        </Item.Header>
                        <Item.Meta>
                            <FontAwesomeIcon icon={sectionIcons[section.icon]} />
                            &nbsp;
                            {section.subheader}
                        </Item.Meta>

                        <Item.Description>
                            <List bulleted>
                                {section.subjects.map(subject => (
                                    <List.Item>{subject}</List.Item>
                                ))}
                            </List>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Grid.Column>
    );
}

function Education(props) {
    const { t } = props;

    return (
        <Container>
            <Header
                size='large'
            >
                <Header.Content>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    &nbsp;
                    {t('education.header')}
                </Header.Content>
            </Header>

            <Container>
                <Grid stackable doubling padded='horizontally'>
                    <Grid.Row columns={1}>
                        <University university={t('education.university', { returnObjects: true })} />
                    </Grid.Row>

                    <Grid.Row columns={3} divided>
                        {t('education.sections', { returnObjects: true }).map(section => (
                            <Section section={section} />
                        ))}
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
}

export default Education;