import { render, screen } from '@testing-library/react';
import TranslateButton from '../TranslateButton';
import 'utils/TranslateButton.css';

describe('TranslateButton', () => {
  it('renders translate button', () => {
    render(<TranslateButton />);
    expect(screen.getByTestId('translate-button')).toBeInTheDocument();
  })

  it('renders translate counterweight', () => {
    render(<TranslateButton />);
    expect(screen.getByTestId('translate-counterweight')).toBeInTheDocument();
    // expect(screen.getByTestId('translate-counterweight')).toHaveStyle({visibility: 'hidden'});
    // expect(screen.getByTestId('translate-counterweight')).not.toBeVisible();
  })

  // it('changes language on click', () => {
  //   render(<TranslateButton />);
  //   screen.getByTestId('translate-button').click();
  // });
})
