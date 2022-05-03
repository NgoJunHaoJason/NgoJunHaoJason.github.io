import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Container, Grid } from 'semantic-ui-react';
import IconHeader from 'utils/IconHeader';

import 'devicon/devicon.min.css';
import 'Resume/Skills/index.css';

const Skills = (): JSX.Element => {
  const { t } = useTranslation('skills');
  return (
    <Container data-testid='skills'>
      <IconHeader icon={faCode} text={t('header')} />
      <Technologies />
    </Container>
  );
}

export default Skills;

// TODO: refactor to reduce duplication
const Technologies = (): JSX.Element => {
  return (
    <Grid
      data-testid='technologies'
      container
      doubling
      verticalAlign='middle'>

      <Grid.Row columns={3}>
        <Technology name='Python' />
        <Technology name='Java' />
        <Technology name='JavaScript' />
      </Grid.Row>

      <Grid.Row columns={3}>
        <Technology name='TypeScript' />
        <Technology name='Dart' />
        <Technology name='C#' />
      </Grid.Row>

      <Grid.Row columns={3}>
        <Technology name='C' />
        <Technology name='HTML' />
        <Technology name='CSS' />
      </Grid.Row>

      <Grid.Row columns={3}>
        <Technology name='MySQL' />
        <Technology name='Git' />
        <Technology name='Ubuntu' />
      </Grid.Row>
    </Grid>
  );
}

interface TechnologyProps {
  name: string
}

export const Technology = ({
  name,
}: TechnologyProps): JSX.Element => {
  const className = `devicon-${mapTechToDevIconName(name)}-plain DevIcon`;
  return (
    <Grid.Column
      data-testid='technology'
      textAlign='center'>
      <i className={className} />
      <br />
      {name}
    </Grid.Column>
  );
}

export const mapTechToDevIconName = (name: string): string => {
  switch (name.toUpperCase()) {
    case 'C#':
      return 'csharp';
    case 'CSS':
      return 'css3';
    case 'HTML':
      return 'html5';
    default:
      return name.toLowerCase();
  }
}
