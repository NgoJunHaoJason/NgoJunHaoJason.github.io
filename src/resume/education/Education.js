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
                                        <Item.Extra>
                                            {t('education.university.honours')}, GPA: 4.41 / 5.00
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
                                            {t('education.core.header')}
                                        </Item.Header>
                                        <Item.Meta>
                                            <FontAwesomeIcon icon={faLaptopCode} />
                                            &nbsp;
                                            {t('education.core.subheader')}
                                        </Item.Meta>

                                        <Item.Description>
                                            <List bulleted>
                                                <List.Item>
                                                    {t('education.core.calc')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.lin-alg')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.seq-series')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.prob-stats')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.discrete-math')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.com-thinking')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.coa')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.data-struct')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.algo')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.oodp')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.com-graph')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.hci')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.os')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.se')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.db')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.ssad')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.net')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.core.compiler')}
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
                                            {t('education.specialisation.header')}
                                        </Item.Header>
                                        <Item.Meta>
                                            <FontAwesomeIcon icon={faRobot} />
                                            &nbsp;
                                            {t('education.specialisation.subheader')}
                                        </Item.Meta>

                                        <Item.Description>
                                            <List bulleted>
                                                <List.Item>
                                                    {t('education.specialisation.var')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.specialisation.cv')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.specialisation.ml')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.specialisation.nn')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.specialisation.nlp')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.specialisation.ia')}
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
                                            {t('education.minor.header')}
                                        </Item.Header>
                                        <Item.Meta>
                                            <FontAwesomeIcon icon={faBrain} />
                                            &nbsp;
                                            {t('education.minor.subheader')}
                                        </Item.Meta>

                                        <Item.Description>
                                            <List bulleted>
                                                <List.Item>
                                                    {t('education.minor.intro')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.so-sci')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.cog-psy')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.sense-percept')}
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