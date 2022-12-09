import { fireEvent, render, screen, within } from "@testing-library/react";
import Education, {
  Section,
  SectionProps,
  UniversityDetails,
  UniversitySummary,
} from "components/CurriculumVitae/Education";

describe("Education", () => {
  it("renders UniversitySummary and UniversityDetails within Education", () => {
    render(<Education />);
    const education = screen.getByTestId("education");

    expect(
      within(education).getByTestId("university-summary")
    ).toBeInTheDocument();

    expect(
      within(education).getByTestId("university-details")
    ).toBeInTheDocument();
  });

  it("renders Certificate in UniversitySummary", () => {
    render(<UniversitySummary />);

    expect(
      within(screen.getByTestId("university-summary")).getByTestId(
        "certificate"
      )
    ).toBeInTheDocument();
  });

  it("renders Section within UniversityDetails", () => {
    render(<UniversityDetails />);

    expect(
      within(screen.getByTestId("university-details")).getByTestId("section")
    ).toBeInTheDocument();
  });

  it("renders section title and subjects within Section", () => {
    const sectionProps: SectionProps = {
      header: "header",
      icon: "faBrain",
      subheader: "subheader",
      subjects: ["subject"],
    };

    render(<Section {...sectionProps} />);
    const section = screen.getByTestId("section");

    expect(within(section).getByTestId("section-title")).toBeInTheDocument();

    expect(within(section).getByTestId("subjects")).not.toHaveClass("active");

    const sectionTitle = screen.getByTestId("section-title");
    fireEvent.click(sectionTitle);

    expect(within(section).getByTestId("subjects")).toHaveClass("active");
  });
});
