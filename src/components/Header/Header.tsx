import { categories } from "@/lib/model";
import { type FC } from "react";
import "./Header.module.css";

interface HeaderProps {
  current?: string;
}

const Header: FC<HeaderProps> = ({ current }) => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <a href="/" className="contrast">
              <strong>Genesys News</strong>
            </a>
          </li>
        </ul>
        <ul>
          {Object.entries(categories).map(([name, path]) => {
            const currentPage = current === `/${path}` ? "page" : undefined;
            return (
              <li key={path} aria-current={currentPage}>
                <a href={`/${path}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
