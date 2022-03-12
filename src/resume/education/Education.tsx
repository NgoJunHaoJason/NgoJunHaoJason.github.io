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
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Container,
    Grid,
    Item,
} from 'semantic-ui-react';
import BulletedList from '../utils/Description';
import IconHeader from '../utils/IconHeader';
import Link from '../utils/Link';

export default function Education() {
    const { t } = useTranslation('education');
    return (
        <Container>
            <IconHeader icon={faGraduationCap} text={t('header')} />
            <University />
        </Container>
    );
}

function University() {
    return (
        <Grid
            stackable
            doubling
            padded='horizontally'>

            <UniversitySummary />
            <UniversityDetails />
        </Grid>
    );
}

function UniversitySummary() {
    const { t } = useTranslation('education');
    return (
        <Grid.Row columns={1}>
            <Grid.Column>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>
                                {t('university.name')}
                            </Item.Header>
                            <Item.Meta>
                                {t('university.date')}
                            </Item.Meta>
                            <Item.Description>
                                {t('university.degree')}
                            </Item.Description>
                            <Item.Description>
                                {t('university.honours')}, {t('university.gpa')}
                            </Item.Description>
                            <Item.Extra>
                                <Certificate />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
        </Grid.Row>
    );
}

function Certificate() {
    const { t } = useTranslation('education');
    return (
        <Fragment>
            <Link text={t('university.cert')} href={t('university.certURL')} />
            (<Link text={t('university.verify')} href={t('university.verifyURL')} />)
        </Fragment>
    );
}

function UniversityDetails() {
    const { t } = useTranslation('education');
    return (
        <Grid.Row columns={3} divided>
            {(t('sections', { returnObjects: true }) as []).map(
                (section, index) => <Section section={section} key={index} />
            )}
        </Grid.Row>
    );
}

interface SectionProps {
    section: any,
    key: number,
}

function Section({ section, key }: SectionProps) {

    const sectionIcons: { [key: string]: IconDefinition } = {
        'faLaptopCode': faLaptopCode,
        'faRobot': faRobot,
        'faBrain': faBrain,
    };

    return (
        <Grid.Column key={key}>
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
