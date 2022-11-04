import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { NavItem } from "./NavItem";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: "/",
  }),
}));

describe("NavItem Component", () => {
  it("should render correctly", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("should redirect the user to the given href", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/any-item");
  });

  it("should not apply border style when not on current page", () => {
    render(<NavItem href="/any-item">Any item</NavItem>);

    expect(screen.getByRole("link")).not.toHaveClass("font-semibold");
  });

  it("should apply border style when on current page", () => {
    const useRouterMocked = jest.mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/any-item",
    } as any);

    render(<NavItem href="/any-item">Any item</NavItem>);

    expect(screen.getByRole("link")).toHaveClass("font-semibold");
  });
});
