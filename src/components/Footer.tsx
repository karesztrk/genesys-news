import type { FC } from "react";

const year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className="container">
      <hr />
      <small>Károly Török &copy; {year}</small>
    </footer>
  );
};

export default Footer;
