import { Navigation } from "./Navigation";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div>Logo</div>
        <Navigation />
      </header>
    </>
  );
};
