import { fireEvent, render, screen, within } from "@testing-library/react";
import Education, {
  BachelorsDetails,
  bachelorsDetailsTestId,
  BachelorsSection,
  BachelorsSectionProps,
  bachelorsSummaryTestId,
  mastersSummaryTestId,
} from "components/CurriculumVitae/Education";

describe("Education", () => {
  it("renders children", () => {
    render(<Education />);
    const education = screen.getByTestId("education");

    expect(
      within(education).getByTestId(mastersSummaryTestId)
    ).toBeInTheDocument();

    expect(
      within(education).getByTestId(bachelorsSummaryTestId)
    ).toBeInTheDocument();

    expect(
      within(education).getByTestId(bachelorsDetailsTestId)
    ).toBeInTheDocument();
  });

  describe("BachelorsDetails", () => {
    it("renders children", () => {
      render(<BachelorsDetails />);

      expect(
        within(screen.getByTestId(bachelorsDetailsTestId)).getByTestId(
          "section"
        )
      ).toBeInTheDocument();
    });

    describe("BachelorsSection", () => {
      it("renders children", () => {
        const sectionProps: BachelorsSectionProps = {
          header: "header",
          icon: "faBrain",
          subheader: "subheader",
          subjects: ["subject"],
        };

        render(<BachelorsSection {...sectionProps} />);
        const section = screen.getByTestId("section");

        expect(
          within(section).getByTestId("section-title")
        ).toBeInTheDocument();

        expect(within(section).getByTestId("subjects")).not.toHaveClass(
          "active"
        );

        const sectionTitle = screen.getByTestId("section-title");
        fireEvent.click(sectionTitle);

        expect(within(section).getByTestId("subjects")).toHaveClass("active");
      });
    });
  });
});
