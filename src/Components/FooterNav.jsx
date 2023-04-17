import NavButton from "./NavButton";
import "../Styles/FooterNav.css";

function FooterNav() {
    return (
        <article className="footerNav__wrapper">
            <footer className="footerNav__container">
                <NavButton to="/events" />
                <NavButton to="/orders" />
                <NavButton to="/tickets" />
            </footer>
        </article>
    );
}

export default FooterNav;
