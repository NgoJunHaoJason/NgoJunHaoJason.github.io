import { render, screen, within } from "@testing-library/react"
import { UniversitySummary } from ".."

it('renders all sections', () => {
  render(<UniversitySummary />);

  // expect(screen.getByTestId('certificate')).toBeInTheDocument();
});
