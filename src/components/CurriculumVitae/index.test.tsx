import { render, screen, within } from "@testing-library/react";
import CurriculumVitae from "components/CurriculumVitae";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("CurriculumVitae", () => {
  it("renders all sections", () => {
    render(<CurriculumVitae />);

    const curriculumVitae = screen.getByTestId("curriculum-vitae");

    expect(within(curriculumVitae).getByTestId("about")).toBeInTheDocument();
    expect(
      within(curriculumVitae).getByTestId("experience")
    ).toBeInTheDocument();
    expect(
      within(curriculumVitae).getByTestId("education")
    ).toBeInTheDocument();
    expect(within(curriculumVitae).getByTestId("projects")).toBeInTheDocument();
    expect(
      within(curriculumVitae).getByTestId("favourites")
    ).toBeInTheDocument();
  });
});
