import { render, screen } from '@testing-library/react';
import BulletedList from 'utils/BulletedList';

describe('BulletedList', () => {
  it('renders bulleted list', () => {
    render(<BulletedList list={[]} />);
    expect(screen.getByTestId('bulleted-list')).toBeInTheDocument();
  });
});
