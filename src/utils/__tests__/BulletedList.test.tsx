import { render, screen, within } from '@testing-library/react';
import BulletedList from 'utils/BulletedList';

describe('BulletedList', () => {
  it('renders bulleted list', () => {
    render(<BulletedList list={['text']} />);
    expect(within(screen.getByTestId('bulleted-list')).getByText('text')).toBeInTheDocument();
  });
});
