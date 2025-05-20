import { NavLink } from "react-router";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <ul className="Nav">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}> Career</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
