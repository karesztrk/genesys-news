import { categories } from "@/lib/model";
import { type FC } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  current?: string;
}

const Header: FC<HeaderProps> = ({ current }) => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <a href="/" className={`contrast ${styles.home}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 31"
                width="19"
                height="31"
                fill="none"
                className={styles.logo}
              >
                <path
                  fill="currentColor"
                  d="M15.512 1.756a1.39 1.39 0 0 1 0 2.781h-.073a1.36 1.36 0 0 1-1.317-1.317c.01-.37.14-.727.366-1.02a1.33 1.33 0 0 1 1.024-.439m0-1.756a3.148 3.148 0 0 0-.145 6.288h.146a3.123 3.123 0 0 0 3.147-3.147A3.121 3.121 0 0 0 15.512 0v.005ZM13.39 21.984a3.22 3.22 0 1 1 0 6.439H9.953a3.22 3.22 0 1 1 0-6.439h3.439Zm0-2.122H9.953a5.269 5.269 0 0 0 0 10.537h3.439a5.269 5.269 0 0 0 0-10.537ZM13.391 9.688a3.22 3.22 0 1 1 0 6.439H5.27a3.22 3.22 0 1 1 0-6.439h8.122Zm0-2.122H5.27a5.269 5.269 0 0 0 0 10.537h8.122a5.269 5.269 0 0 0 0-10.537Z"
                />
              </svg>
              <strong>Genesys News</strong>
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
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
