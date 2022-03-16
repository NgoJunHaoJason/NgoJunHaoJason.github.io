import { render } from '@testing-library/react';
import Resume from '.';

test('renders learn react link', () => {
    const { getByText } = render(<Resume />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
