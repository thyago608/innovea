import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { NavItem } from "../../components/Header/NavItem";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: "/",
  }),
}));

describe("NavItem Component", () => {
  it("should render correctly", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    const listItem = screen.getByRole("listitem");

    expect(listItem).toBeInTheDocument();
  });

  it("should redirect the user to the given href", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/any-item");
  });

  it("should not apply border style when not on current page", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    const link = screen.getByRole("link");

    expect(link).not.toHaveClass("font-semibold");
  });

  it("should apply border style when on current page", () => {
    const useRouterMocked = jest.mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/any-item",
    } as any);

    render(<NavItem href="/any-item">Any item</NavItem>);

    const link = screen.getByRole("link");

    expect(link).toHaveClass("font-semibold");
  });
});
