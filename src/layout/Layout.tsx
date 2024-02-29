import "@picocss/pico/css/pico.orange.min.css";
import type { FC, PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <title>Genesys News</title>
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
