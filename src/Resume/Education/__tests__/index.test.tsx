import { render, screen} from '@testing-library/react';
import {
  UniversitySummary,
} from 'Resume/Education';

describe('Education', () => {
  it('renders certificate in university summary', () => {
    render(<UniversitySummary />);
    expect(screen.getByTestId('certificate')).toBeInTheDocument();
  });
});
