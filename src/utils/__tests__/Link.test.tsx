import { render, screen, within } from "@testing-library/react"
import Link from "../Link"

it('renders text', () => {
  render(<Link text='text' href='' />);

  expect(within(screen.getByTestId('link')).getByText('text')).toBeInTheDocument();
})