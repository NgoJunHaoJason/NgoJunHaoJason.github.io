import {
    faTasks,
} from '@fortawesome/free-solid-svg-icons';
import {
    Card,
    Container,
} from 'semantic-ui-react';
import BulletedList from '../components/Description';
import IconHeader from '../components/IconHeader';
import Labels from '../components/Technologies';

export default function Projects({ t }: any) {
    return (
        <Container>
            <IconHeader icon={faTasks} text={t('projects.header')} />

            <Card.Group itemsPerRow={2} centered doubling stackable>
                {t('projects.list', { returnObjects: true }).map(
                    (project: any, index: number) => (
                        <Card fluid className='Card' key={index}>
                            <Card.Content>
                                <ProjectTitle header={project.header} url={project.url} />
                                <Card.Description>
                                    {t(project.subheader)}
                                </Card.Description>
                                <Card.Meta>
                                    {t(project.date)}
                                </Card.Meta>

                                <Card.Description>
                                    <BulletedList list={project.description} />
                                </Card.Description>
                            </Card.Content>

                            <Card.Content extra>
                                <Labels labels={project.technologies} />
                            </Card.Content>
                        </Card>
                    )
                )}
            </Card.Group>
        </Container>
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
