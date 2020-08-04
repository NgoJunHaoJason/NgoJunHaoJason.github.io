import React from 'react';
import { render } from '@testing-library/react';
import Resume from './Resume';

test('renders learn react link', () => {
    const { getByText } = render(<Resume />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
