import { render, screen } from '@testing-library/react';
import Labels from 'utils/Labels';

describe('Labels', () => {
  it('renders labels', () => {
    render(<Labels labels={[]} />);
    expect(screen.getByTestId('labels')).toBeInTheDocument();
  });
});
