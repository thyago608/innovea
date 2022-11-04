import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: "/",
  }),
}));

describe("Header Component", () => {
  it("should render correctly", () => {
    render(<Header />);

    const header = screen.getByRole("menu");
    const logo = screen.getByRole("img", {
      name: /innovea/i,
    });
    const navigation = screen.getByRole("list");

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
