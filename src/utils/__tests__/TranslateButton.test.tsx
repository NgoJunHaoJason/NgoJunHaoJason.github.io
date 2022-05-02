import { render, screen } from '@testing-library/react';
import i18n from '../../config/i18nForTests';
import TranslateButton from '../TranslateButton';

it('changes language on click', () => {
  render(<TranslateButton />);

  screen.getByTestId('translate-button').click();

  // TODO: expect
});
