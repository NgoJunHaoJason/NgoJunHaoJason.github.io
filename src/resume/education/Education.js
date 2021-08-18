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
                                                <List.Item>
                                                    {t('education.core.embedded')}
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
                                            {t('education.elect-focus.header')}
                                        </Item.Header>
                                        <Item.Meta>
                                            <FontAwesomeIcon icon={faRobot} />
                                            &nbsp;
                                            {t('education.elect-focus.subheader')}
                                        </Item.Meta>

                                        <Item.Description>
                                            <List bulleted>
                                                <List.Item>
                                                    {t('education.elect-focus.var')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.elect-focus.cv')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.elect-focus.ml')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.elect-focus.nn')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.elect-focus.nlp')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.elect-focus.ia')}
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
                                                    {t('education.minor.so-sci')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.cog-psy')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.sense-percept')}
                                                </List.Item>
                                                <List.Item>
                                                    {t('education.minor.human-lang')}
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