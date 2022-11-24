import { faCode } from "@fortawesome/free-solid-svg-icons";
import { render, screen, within } from "@testing-library/react";
import IconHeader from "components/reusable/IconHeader";

describe("IconHeader", () => {
  it("renders text in icon header", () => {
    render(<IconHeader icon={faCode} text="text" />);
    expect(
      within(screen.getByTestId("icon-header")).getByText("text")
    ).toBeInTheDocument();
  });
});
