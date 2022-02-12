import {
    faBrain,
    faGraduationCap,
    faLaptopCode,
    faRobot,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    Container,
    Grid,
    Item,
} from 'semantic-ui-react';
import BulletedList from '../components/Description';
import IconHeader from '../components/IconHeader';

export default function Education({ t }: any) {
    return (
        <Container>
            <IconHeader icon={faGraduationCap} text={t('education.header')} />

            <Container>
                <Grid
                    stackable
                    doubling
                    padded='horizontally'>

                    <Grid.Row columns={1}>
                        <University university={t('education.university', { returnObjects: true })} />
                    </Grid.Row>

                    <Grid.Row columns={3} divided>
                        {t('education.sections', { returnObjects: true }).map(
                            (section: any, index: number) => (
                                <Section section={section} key={index} />
                            )
                        )}
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
}

function University({ university }: any) {
    return (
        <Grid.Column>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header>{university.name}</Item.Header>
                        <Item.Meta>{university.date}</Item.Meta>
                        <Item.Description>{university.degree}</Item.Description>
                        <Item.Description>{university.honours}, {university.gpa}</Item.Description>
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

function Section({ section }: any) {

    const sectionIcons: { [key: string]: IconDefinition } = {
        'faLaptopCode': faLaptopCode,
        'faRobot': faRobot,
        'faBrain': faBrain,
    };

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
                            <BulletedList list={section.subjects} />
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Grid.Column>
    );
}
