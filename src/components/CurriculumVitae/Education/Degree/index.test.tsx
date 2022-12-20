import { render, screen } from "@testing-library/react";
import Degree, {
  degreeDetailsTestIdSuffix,
  degreeSummaryTestIdSuffix,
} from "components/CurriculumVitae/Education/Degree";

describe("Degree", () => {
  const mockDegreeTestId = "degree";

  const mockDegree = {
    testId: mockDegreeTestId,
    university: "university",
    degreeName: "degreeName",
    date: "date",
    sections: [],
  };
  it("renders children", () => {
    render(<Degree {...mockDegree} />);

    expect(
      screen.getByTestId(`${mockDegreeTestId}-${degreeSummaryTestIdSuffix}`)
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${mockDegreeTestId}-${degreeDetailsTestIdSuffix}`)
    ).toBeInTheDocument();
  });
});
