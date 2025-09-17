import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders Home page heading", () => {
  render(<Home />);
  expect(
    screen.getByText(/Welcome to Dummy SDLC Project/i)
  ).toBeInTheDocument();
});
