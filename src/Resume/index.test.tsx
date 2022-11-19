import { render, screen, within } from "@testing-library/react";
import Resume from "Resume";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Resume", () => {
  it("renders all sections in Resume", () => {
    render(<Resume />);

    const resume = screen.getByTestId("resume");

    expect(within(resume).getByTestId("about")).toBeInTheDocument();

    expect(within(resume).getByTestId("experience")).toBeInTheDocument();

    expect(within(resume).getByTestId("education")).toBeInTheDocument();

    expect(within(resume).getByTestId("projects")).toBeInTheDocument();

    expect(within(resume).getByTestId("favourites")).toBeInTheDocument();
  });
});
