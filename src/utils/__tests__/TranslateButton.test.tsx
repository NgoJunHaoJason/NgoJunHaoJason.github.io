import { render, screen } from '@testing-library/react';
import i18n from '../../config/i18n';
import TranslateButton from '../TranslateButton';

it('changes language on click', () => {
    render(<TranslateButton />);
    const previousLanguage = i18n.language;

    screen.getByTestId('translate-button').click();

    expect(i18n.language).not.toEqual(previousLanguage);
});
