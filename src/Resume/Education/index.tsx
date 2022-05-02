import {
  faBrain,
  faGraduationCap,
  faLaptopCode,
  faRobot,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Item,
} from 'semantic-ui-react';
import BulletedList from 'utils/BulletedList';
import IconHeader from 'utils/IconHeader';
import Link from 'utils/Link';

export default (): JSX.Element => {
  const { t } = useTranslation('education');
  return (
    <Container>
      <IconHeader icon={faGraduationCap} text={t('header')} />
      <University />
    </Container>
  );
}

const University = (): JSX.Element => {
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

export const UniversitySummary = (): JSX.Element => {
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

const Certificate = (): JSX.Element => {
  const { t } = useTranslation('education');
  return (
    <>
      <Link text={t('university.cert')} href={t('university.certURL')} />
      (<Link text={t('university.verify')} href={t('university.verifyURL')} />)
    </>
  );
}

const UniversityDetails = (): JSX.Element => {
  const { t } = useTranslation('education');
  return (
    <Grid.Row columns={3} divided>
      {(t('sections', { returnObjects: true }) as Array<SectionProps>).map(
        (section, index) => <Section {...section} key={index} />
      )}
    </Grid.Row>
  );
}

interface SectionProps {
  header: string,
  icon: string,
  subheader: string,
  subjects: Array<string>,
}

const Section = ({
  header,
  icon,
  subheader,
  subjects,
}: SectionProps): JSX.Element => {

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
              {header}
            </Item.Header>
            <Item.Meta>
              <FontAwesomeIcon icon={sectionIcons[icon]} />
              &nbsp;
              {subheader}
            </Item.Meta>

            <Item.Description>
              <BulletedList list={subjects} />
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Column>
  );
}
