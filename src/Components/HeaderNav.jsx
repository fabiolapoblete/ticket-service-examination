import { NavLink } from "react-router-dom";
import "../Styles/headerNav.css";

function HeaderNav({ to }) {
  return (
    <nav className="navbar">
      <NavLink to={to}>
        <img src="/src/assets/arrow_back.svg" alt="arrow back" />
      </NavLink>
      <NavLink to="/orders">
        <img src="/src/assets/shopping_cart2.svg" alt="shopping cart" />
      </NavLink>
    </nav>
  );
}

export default HeaderNav;
