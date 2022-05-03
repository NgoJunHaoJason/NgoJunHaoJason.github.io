import { render, screen, within } from '@testing-library/react';
import Education, {
  UniversitySummary,
  UniversityDetails,
  SectionProps,
  Section,
} from 'Resume/Education';

describe('Education', () => {
  // it('renders UniversitySummary and UniversityDetails within Education', () => {
  //   render(<Education />);
  // });

  it('renders Certificate in UniversitySummary', () => {
    render(<UniversitySummary />);

    expect(within(screen.getByTestId('university-summary'))
      .getByTestId('certificate'))
      .toBeInTheDocument();
  });

  // it('renders Section within UniversityDetails', () => {
  //   render(<UniversityDetails />);

  //   expect(within(screen.getByTestId('university-details'))
  //     .getByTestId('section'))
  //     .toBeInTheDocument();
  // })

  it('renders header and subheader within Section', () => {
    const sectionProps: SectionProps = {
      header: 'header',
      icon: 'faBrain',
      subheader: 'subheader',
      subjects: [],
    };

    render(<Section {...sectionProps} />);
    const section = screen.getByTestId('section');

    expect(within(section)
      .getByText('header'))
      .toBeInTheDocument();

    expect(within(section)
      .getByText('subheader'))
      .toBeInTheDocument();
  });
});
