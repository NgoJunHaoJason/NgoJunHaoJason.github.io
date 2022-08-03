import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
  Card,
  Container,
} from 'semantic-ui-react';
import BulletedList from 'utils/BulletedList';
import IconHeader from 'utils/IconHeader';
import Link from 'utils/Link';
import Labels from 'utils/Labels';

const Projects = (): JSX.Element => {
  const { t } = useTranslation('projects');
  return (
    <Container data-testid='projects'>
      <IconHeader icon={faTasks} text={t('header')} />

      <Card.Group
        itemsPerRow={2}
        centered
        doubling
        stackable>
        {t<any, ProjectProps[]>('list', { returnObjects: true }).map(
          (project: ProjectProps, index: number) => <Project {...project} key={index} />
        )}
      </Card.Group>
    </Container>
  );
}

export default Projects;

export interface ProjectProps {
  header: string,
  url: string,
  subheader: string,
  date: string,
  description: Array<string>,
  technologies: Array<string>,
}

export const Project = ({
  header,
  url,
  subheader,
  date,
  description,
  technologies,
}: ProjectProps): JSX.Element => {
  return (
    <Card
      data-testid='project'
      className='Card'
      fluid>
      <Card.Content>
        <ProjectTitle text={header} url={url} />
        <Card.Description>
          {subheader}
        </Card.Description>
        <Card.Meta>
          {date}
        </Card.Meta>

        <Card.Description>
          <BulletedList list={description} />
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Labels labels={technologies} />
      </Card.Content>
    </Card>
  );
}

export interface ProjectTitleProps {
  text: string,
  url: string
}

// display title as a link only if it exists
export const ProjectTitle = ({
  text,
  url,
}: ProjectTitleProps): JSX.Element => {
  return (
    <Card.Header data-testid='project-title'>
      {url === '' ? (text) : (<Link content={text} href={url} />)}
    </Card.Header>
  );
}
