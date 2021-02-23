import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h2>Titouan Escorneboueü</h2>
      </NavLink>
      <div>
        <NavLink to="/publication">
          <p>Publications</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
