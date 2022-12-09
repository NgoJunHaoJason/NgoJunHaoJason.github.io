import { render, screen, within } from "@testing-library/react";
import Labels from "components/shared/Labels";

describe("Labels", () => {
  it("renders labels", () => {
    render(<Labels labels={["text"]} />);
    expect(
      within(screen.getByTestId("labels")).getByText("text")
    ).toBeInTheDocument();
  });
});
