import { Link } from "react-router";

export const Services = () => {
  return (
    <>
      <div className="servies">
        <h1>Our Services</h1>
        <ul>
          <li>
            <Link to={"/integration"}>Integrations</Link>
          </li>
          <li>
            <Link to={"/dataprotection"}>Data Protection</Link>
          </li>
          <li>
            <Link to={"/aistrategy"}>AI Strategy</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
