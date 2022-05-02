import { render, screen } from '@testing-library/react'
import { Project, ProjectProps } from 'Resume/Projects';

const projectProps: ProjectProps = {
  header: 'header',
  url: '',
  subheader: 'subheader',
  date: '',
  description: ['description1', 'description2'],
  technologies: ['technology1', 'technology2'],
};

describe('Projects', () => {
  it('renders project title in project card', () => {
    render(<Project {...projectProps} />);
    expect(screen.getByTestId('project-title')).toBeInTheDocument();
  });
});
