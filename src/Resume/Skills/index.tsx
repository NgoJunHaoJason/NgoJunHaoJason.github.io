import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Container, Grid } from 'semantic-ui-react';
import IconHeader from '../../utils/IconHeader';

import 'devicon/devicon.min.css';
import './index.css';

export default function Skills() {
  const { t } = useTranslation('skills');
  return (
    <Container>
      <IconHeader icon={faCode} text={t('header')} />
      <Grid
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
    </Container>
  );
}

interface TechnologyProps {
  name: string
}

function Technology({
  name,
}: TechnologyProps) {
  const className = `devicon-${mapTechToDevIconName(name)}-plain DevIcon`;
  return (
    <Grid.Column textAlign='center'>
      <i className={className}></i>
      <br />
      {name}
    </Grid.Column>
  );
}

function mapTechToDevIconName(name: string) {
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
