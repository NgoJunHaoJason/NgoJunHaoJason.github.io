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
                        <Grid.Column>
                            <Item.Group>
                                <Item>
                                    <Item.Content>
                                        <Item.Header>
                                            {t('education.university.name')}
                                        </Item.Header>
                                        <Item.Meta>
                                            {t('education.university.date')}
                                        </Item.Meta>
                                        <Item.Description>
                                            {t('education.university.degree')}
                                        </Item.Description>
                                        <Item.Description>
                                            {t('education.university.honours')}, GPA: 4.46 / 5.00
                                        </Item.Description>
                                        <Item.Extra>
                                            <a
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                href='https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io/tree/develop/documents/degree_transcript_ngo_jun_hao_jason.opencert'
                                            >
                                                {t('education.university.cert')}
                                            </a>
                                            (<a
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                href='https://www.opencerts.io/'
                                            >
                                                {t('education.university.verify')}
                                            </a>)
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3} divided>
                        {t('education.sections', {returnObjects: true}).map(section => (
                            <Grid.Column>
                                <Item.Group>
                                    <Item>
                                        <Item.Content>
                                            <Item.Header>
                                                {section.header}
                                            </Item.Header>
                                            <Item.Meta>
                                                <FontAwesomeIcon icon={section.icon} />
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
                        ))}
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
}

export default Education;