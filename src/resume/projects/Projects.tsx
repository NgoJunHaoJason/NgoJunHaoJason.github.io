import {
    faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
    Card,
    Container,
} from 'semantic-ui-react';
import BulletedList from '../utils/Description';
import IconHeader from '../utils/IconHeader';
import Link from '../utils/Link';
import Labels from '../utils/Technologies';

export default function Projects() {
    const { t } = useTranslation('projects');
    return (
        <Container>
            <IconHeader icon={faTasks} text={t('header')} />

            <Card.Group itemsPerRow={2} centered doubling stackable>
                {(t('list', { returnObjects: true }) as []).map(
                    (project, index) => <Project project={project} key={index} />
                )}
            </Card.Group>
        </Container>
    );
}

interface ProjectProps {
    project: any,
    key: number,
}

function Project({ project, key }: ProjectProps) {
    return (
        <Card fluid className='Card' key={key}>
            <Card.Content>
                <ProjectTitle text={project.header} url={project.url} />
                <Card.Description>
                    {project.subheader}
                </Card.Description>
                <Card.Meta>
                    {project.date}
                </Card.Meta>

                <Card.Description>
                    <BulletedList list={project.description} />
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Labels labels={project.technologies} />
            </Card.Content>
        </Card>
    );
}

interface ProjectTitleProps {
    text: string,
    url: string
}

// display title as a link only if it exists
function ProjectTitle({ text, url }: ProjectTitleProps) {
    return (
        <Card.Header>
            {url === '' ? (text) : (
                <Link text={text} href={url} />
            )}
        </Card.Header>
    );
}
