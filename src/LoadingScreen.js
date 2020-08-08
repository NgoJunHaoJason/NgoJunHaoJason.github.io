import React from 'react';

import {
    Container,
    Dimmer,
    Loader,
} from 'semantic-ui-react';

function LoadingScreen() {
    return (
        <Container fluid>
            <Dimmer active>
                <Loader />
            </Dimmer>
        </Container>
    );
}

export default LoadingScreen;
