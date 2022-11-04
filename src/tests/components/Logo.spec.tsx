import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../../components/Header/Logo";

describe("Logo Component", () => {
  it("should render correctly", () => {
    render(<Logo />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should redirect user to home page", () => {
    render(<Logo />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
