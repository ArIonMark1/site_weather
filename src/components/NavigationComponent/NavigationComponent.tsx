import { NavLink } from "react-router-dom";
import "./NavigationComponent.scss";

const NavigationComponent = () => {
  return (
    <>
      <nav className="navigation">
        <NavLink className="navigation__link" to={"/"}>
          Home page
        </NavLink>

        <NavLink to={"history"} className="navigation__link">
          Search History
        </NavLink>
      </nav>
    </>
  );
};

export default NavigationComponent;
