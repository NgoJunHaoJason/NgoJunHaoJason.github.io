import { render, screen } from "@testing-library/react";
import TranslateButton from "components/Resume/TranslateButton";

describe("TranslateButton", () => {
  it("renders translate button", () => {
    render(<TranslateButton />);
    expect(screen.getByTestId("translate-button")).toBeInTheDocument();
  });

  it("renders counterweight", () => {
    render(<TranslateButton />);
    expect(screen.getByTestId("translate-counterweight")).toBeInTheDocument();
  });

  // it('changes language on click', () => {
  //   render(<TranslateButton />);
  //   screen.getByTestId('translate-button').click();
  // });
});
