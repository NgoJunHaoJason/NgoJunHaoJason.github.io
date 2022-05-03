import {
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

const LoadingScreen = (): JSX.Element => {
  return (
    <Container fluid>
      <Dimmer active>
        <Loader data-testid='loader' />
      </Dimmer>
    </Container>
  );
}

export default LoadingScreen;
