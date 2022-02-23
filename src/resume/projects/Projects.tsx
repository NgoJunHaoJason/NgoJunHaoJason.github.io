import {
    faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
    Card,
    Container,
} from 'semantic-ui-react';
import BulletedList from '../components/Description';
import IconHeader from '../components/IconHeader';
import Labels from '../components/Technologies';

export default function Projects() {
    const { t } = useTranslation('projects');
    return (
        <Container>
            <IconHeader icon={faTasks} text={t('header')} />

            <Card.Group itemsPerRow={2} centered doubling stackable>
                {(t('list', { returnObjects: true }) as []).map(
                    (project: any, index: number) => <Project project={project} key={index} />
                )}
            </Card.Group>
        </Container>
    );
}

function Project({ project, key }: any) {
    return (
        <Card fluid className='Card' key={key}>
            <Card.Content>
                <ProjectTitle header={project.header} url={project.url} />
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

// display title as a link only if it exists
function ProjectTitle({ header, url }: any) {
    return (
        <Card.Header>
            {url === '' ? (header) : (
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={url}>
                    {header}
                </a>
            )}
        </Card.Header>
    );
}
