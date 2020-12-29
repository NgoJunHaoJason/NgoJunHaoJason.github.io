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

function Projects(props) {
    const { t } = props;

    return (
        <Container>
            <Header
                size='large'
            >
                <Header.Content>
                    <FontAwesomeIcon icon={faTasks} />
                    &nbsp;
                    {t('projects.header')}
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
                                href='https://github.com/NgoJunHaoJason/CZ4042'
                            >
                                {t('projects.nn.header')}
                            </a>
                        </Card.Header>
                        <Card.Description>
                            &nbsp;
                        </Card.Description>
                        <Card.Meta>
                            {t('projects.nn.date')}
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    {t('projects.nn.point1')}
                                </li>
                            </ul>
                        </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <Label.Group>
                            <Label>Tensorflow</Label>
                            <Label>Google Colaboratory</Label>
                            <Label>Weights and Biases</Label>
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
                                href='https://github.com/NgoJunHaoJason/CZ4041'
                            >
                                {t('projects.ml.header')}
                            </a>
                        </Card.Header>
                        <Card.Description>
                            {t('projects.ml.subheader')}
                        </Card.Description>
                        <Card.Meta>
                            {t('projects.ml.date')}
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    {t('projects.ml.point1')}
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
                                {t('projects.vr.header')}
                            </a>
                        </Card.Header>
                        <Card.Description>
                            &nbsp;
                        </Card.Description>
                        <Card.Meta>
                            {t('projects.vr.date')}
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    {t('projects.vr.point1')}
                                </li>
                                <li>
                                    {t('projects.vr.point2')}
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
                            {t('projects.ureca.header')} (URECA)
                        </Card.Header>
                        <Card.Description>
                            {t('projects.ureca.subheader')}
                        </Card.Description>
                        <Card.Meta>
                            {t('projects.ureca.date')}
                        </Card.Meta>

                        <Card.Description>
                            <ul>
                                <li>
                                    {t('projects.ureca.point1')}
                                </li>
                                <li>
                                    {t('projects.ureca.point2')}
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
            </Card.Group>
        </Container>
    );
}

export default Projects;