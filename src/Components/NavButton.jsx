import { NavLink } from "react-router-dom";

function NavButton({ to }) {
  return (
    <NavLink to={to}>
      <button className="navButton"></button>
    </NavLink>
  );
}

export default NavButton;
