import { render, screen, within } from '@testing-library/react'
import { Project, ProjectProps } from '..';

const projectProps: ProjectProps = {
  header: 'header',
  url: '',
  subheader: 'subheader',
  date: '',
  description: ['description1', 'description2'],
  technologies: ['technology1', 'technology2'],
};

it('renders project title in project card', () => {
  render(<Project {...projectProps} />);

  expect(screen.getByTestId('project-title')).toBeInTheDocument();
});
