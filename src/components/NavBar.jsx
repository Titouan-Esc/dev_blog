import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="nav_top">
        <h2>Titouan Escorneboueü</h2>
      </NavLink>
      <div>
        <NavLink to="/contact" activeClassName="nav">
          <p>Contact</p>
        </NavLink>
        <NavLink to="/me contacter">
          <p>Me contacter</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
