import {
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

export default function LoadingScreen() {
  return (
    <Container fluid>
      <Dimmer active>
        <Loader data-testid='loader' />
      </Dimmer>
    </Container>
  );
}
