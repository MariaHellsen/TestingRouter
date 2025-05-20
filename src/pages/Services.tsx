import { Link } from "react-router";
import { useParams } from "react-router";

export const Services = () => {
  const { name } = useParams();

  return (
    <>
      <div className="servies">
        <h1>Our Services: {name}</h1>
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
