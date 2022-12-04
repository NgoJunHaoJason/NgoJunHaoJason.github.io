import { render, screen, within } from "@testing-library/react";
import Favourites from "components/CurriculumVitae/Favourites";

describe("Favourites", () => {
  it("renders components within Favourites", () => {
    render(<Favourites />);

    const favourites = screen.getByTestId("favourites");

    expect(within(favourites).getByTestId("books")).toBeInTheDocument();

    expect(within(favourites).getByTestId("practices")).toBeInTheDocument();
  });
});
