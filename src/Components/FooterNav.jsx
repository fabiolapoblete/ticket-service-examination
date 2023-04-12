import NavButton from "./NavButton";
import "../Styles/FooterNav.css";

function FooterNav() {
  return (
    <footer className="footerNav__container">
      <NavButton to="/events" />
      <NavButton />
      <NavButton />
    </footer>
  );
}

export default FooterNav;
