import { render, screen, within } from "@testing-library/react";
import Projects, {
  ProjectProps,
  Project,
  ProjectTitleProps,
  ProjectTitle,
} from "Resume/Projects";

describe("Projects", () => {
  it("renders Project within Projects", () => {
    render(<Projects />);

    expect(
      within(screen.getByTestId("projects")).getByTestId("project")
    ).toBeInTheDocument();
  });

  it("renders ProjectTitle within Project", () => {
    const projectProps: ProjectProps = {
      header: "header",
      url: "",
      subheader: "subheader",
      date: "",
      description: [],
      technologies: [],
    };

    render(<Project {...projectProps} />);

    expect(
      within(screen.getByTestId("project")).getByTestId("project-title")
    ).toBeInTheDocument();
  });

  it("renders text in ProjectTitle", () => {
    const projectTitleProps: ProjectTitleProps = {
      text: "text",
      url: "",
    };

    render(<ProjectTitle {...projectTitleProps} />);

    expect(
      within(screen.getByTestId("project-title")).getByText("text")
    ).toBeInTheDocument();
  });
});
