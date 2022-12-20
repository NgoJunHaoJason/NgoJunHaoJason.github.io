import { render, screen } from "@testing-library/react";
import Education, {
  bachelorsDegreeTestId,
  mastersDegreeTestId,
} from "components/CurriculumVitae/Education";

describe("Education", () => {
  it("renders children", () => {
    render(<Education />);

    expect(screen.getByTestId(mastersDegreeTestId)).toBeInTheDocument();
    expect(screen.getByTestId(bachelorsDegreeTestId)).toBeInTheDocument();
  });
});
