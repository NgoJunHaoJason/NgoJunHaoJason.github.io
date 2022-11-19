import { render, screen, within } from "@testing-library/react";
import Experience from "Resume/Experience";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Experience", () => {
  it("renders Jobs within Experience", () => {
    render(<Experience />);

    expect(
      within(screen.getByTestId("experience")).getByTestId("jobs")
    ).toBeInTheDocument();
  });
});
