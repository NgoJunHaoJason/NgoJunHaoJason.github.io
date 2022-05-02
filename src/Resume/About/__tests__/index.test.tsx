import { render, screen, within } from '@testing-library/react';
import {
  AboutItem,
  AboutItemProps,
} from 'Resume/About';

describe('About', () => {
  it('renders text within about item', () => {
    const aboutItemProps: AboutItemProps = {
      icon: 'arrow up',
      text: 'text',
      url: '',
    };

    render(<AboutItem {...aboutItemProps} />);
    expect(within(screen.getByTestId('about-item')).getByText('text')).toBeInTheDocument();
  });
});
