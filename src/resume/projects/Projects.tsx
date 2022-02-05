import {
    Card,
    Container,
    Header,
    Label,
} from 'semantic-ui-react';
import {
    FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import {
    faTasks,
} from '@fortawesome/free-solid-svg-icons';

// display title as a link only if it exists
function ProjectTitle(props: any) {
    const { header, url } = props;

    if (url === '') {
        return (header);
    } else {
        return (
            <a
                target='_blank'
                rel='noopener noreferrer'
                href={url}
            >
                {header}
            </a> 
        );
    }
}

function Projects(props: any) {
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
                {t('projects.list', { returnObjects: true }).map((project: any) => (
                    <Card fluid className='Card'>
                        <Card.Content>
                            <Card.Header>
                                <ProjectTitle header={project.header} url={project.url} />
                            </Card.Header>
                            <Card.Description>
                                {t(project.subheader)}
                            </Card.Description>
                            <Card.Meta>
                                {t(project.date)}
                            </Card.Meta>

                            <Card.Description>
                                <ul>
                                    {project.description.map((item: any) => (<li>{item}</li>))}
                                </ul>
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Label.Group>
                                {project.technologies.map((item: any) => (<Label className='Label'>{item}</Label>))}
                            </Label.Group>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
        </Container>
    );
}

export default Projects;
