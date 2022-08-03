import { render, screen, within } from '@testing-library/react';
import Link from 'utils/Link';

describe('Link', () => {
  it('renders text in link', () => {
    render(<Link content='text' href='' />);
    expect(within(screen.getByTestId('link')).getByText('text')).toBeInTheDocument();
  });
});
