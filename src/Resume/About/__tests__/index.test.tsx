import { render, screen, within } from '@testing-library/react';
import About, {
  AboutLinks,
  AboutItem,
  AboutItemProps,
} from 'Resume/About';

describe('About', () => {
  it('renders components within About', () => {
    render(<About />);
    const about = screen.getByTestId('about');

    expect(within(about).getByTestId('about-header')).toBeInTheDocument();
    expect(within(about).getByTestId('about-links')).toBeInTheDocument();
  });

  it('renders AboutItem within AboutLinks', () => {
    render(<AboutLinks />);
    expect(within(screen.getByTestId('about-links')).getByTestId('about-item')).toBeInTheDocument();
  });

  it('renders text within AboutItem', () => {
    const aboutItemProps: AboutItemProps = {
      icon: 'arrow up',
      text: 'text',
      url: '',
    };

    render(<AboutItem {...aboutItemProps} />);
    expect(within(screen.getByTestId('about-item')).getByText('text')).toBeInTheDocument();
  });
});
