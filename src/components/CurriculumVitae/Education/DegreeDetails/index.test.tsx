import { fireEvent, render, screen } from "@testing-library/react";
import { DegreeDetailsSection, sectionTitleTestId, subjectsTestId } from ".";

describe("DegreeDetails", () => {
  describe("DegreeDetailsSection", () => {
    const mockDegreeDetailsSection = {
      header: "header",
      icon: "faRobot",
      subheader: "subheader",
      subjects: [],
    };

    it("renders subjects on click", () => {
      render(<DegreeDetailsSection {...mockDegreeDetailsSection} />);

      const subjects = screen.getByTestId(subjectsTestId);

      expect(subjects).not.toHaveClass("active");

      fireEvent.click(screen.getByTestId(sectionTitleTestId));

      expect(subjects).toHaveClass("active");
    });
  });
});
