import NavigationComponent from "../NavigationComponent";
import "./HeaderComponent.scss";
import { NavLink } from "react-router-dom";

const HeaderComponnet = () => {
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <NavLink className="top-link" to={"/"}>
            <img className="top-link__logo" src="logo_.png" alt="logo" />
          </NavLink>
          <NavigationComponent />
        </div>
      </header>
    </>
  );
};

export default HeaderComponnet;
