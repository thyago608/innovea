import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

export function Header() {
  return (
    <header className="bg-gray-100 sticky top-0" role="menu">
      <div className="max-w-[1000px] h-16 my-0 mx-auto px-4 flex justify-between items-center md:px-8 md:h-20">
        <Logo />
        <nav>
          <ul className="flex gap-4">
            <NavItem href="/">início</NavItem>
            <NavItem href="/articles">artigos</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}
