import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages";

describe("Home Page", () => {
  it("should render correctly", () => {
    render(<Home />);

    const blogTitle = screen.getByText("Innovea Blog");
    const presentation = screen.getByText(
      "Fique por dentro das notícias mais recentes do mundo."
    );
    const clickHereButton = screen.getByRole("link", {
      name: "Clique aqui",
    });

    expect(blogTitle).toBeInTheDocument();
    expect(presentation).toBeInTheDocument();
    expect(clickHereButton).toBeInTheDocument();
  });

  it("should redirect to articles page", () => {
    render(<Home />);

    const clickHereButton = screen.getByRole("link", {
      name: /Clique aqui/i,
    });

    expect(clickHereButton).toHaveAttribute("href", "/articles");
  });
});
