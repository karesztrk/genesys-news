import type { FC } from "react";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <hr />
      <small>Károly Török &copy; {year}</small>
    </footer>
  );
};

export default Footer;
