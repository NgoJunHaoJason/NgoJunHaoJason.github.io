import {
  Container,
  Dimmer,
  Loader,
} from 'semantic-ui-react';

export default (): JSX.Element => {
  return (
    <Container fluid>
      <Dimmer active>
        <Loader data-testid='loader' />
      </Dimmer>
    </Container>
  );
}
