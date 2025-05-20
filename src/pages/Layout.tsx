import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
