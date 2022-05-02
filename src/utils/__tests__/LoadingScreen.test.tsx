import { render, screen } from "@testing-library/react";
import LoadingScreen from "../LoadingScreen";

it('renders loader in loading screen', () => {
  render(<LoadingScreen />);

  expect(screen.getByTestId('loader')).toBeInTheDocument();
});