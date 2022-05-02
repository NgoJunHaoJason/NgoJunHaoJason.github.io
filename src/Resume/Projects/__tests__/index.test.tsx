import { render, screen, within } from '@testing-library/react'
import {
  Project,
  ProjectProps,
  ProjectTitle,
  ProjectTitleProps,
} from 'Resume/Projects';

describe('Projects', () => {
  it('renders project title in project card', () => {
    const projectProps: ProjectProps = {
      header: 'header',
      url: '',
      subheader: 'subheader',
      date: '',
      description: ['description1', 'description2'],
      technologies: ['technology1', 'technology2'],
    };

    render(<Project {...projectProps} />);
    expect(screen.getByTestId('project-title')).toBeInTheDocument();
  });

  it('renders text in project title', () => {
    const projectTitleProps: ProjectTitleProps = {
      text: 'text',
      url: '',
    };

    render(<ProjectTitle {...projectTitleProps} />);
    expect(within(screen.getByTestId('project-title')).getByText('text')).toBeInTheDocument();
  });
});
