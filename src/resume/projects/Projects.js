import React from 'react';

import {
    Container,
    Header
} from 'semantic-ui-react';

function Projects() {
    return (
        <Container>
            <Header
                size="large"
            >
                <Header.Content>
                    Projects
                </Header.Content>
            </Header>

            <Container text>
                Coming Soon
            </Container>
        </Container>
    );
}

export default Projects;