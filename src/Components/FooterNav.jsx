import NavButton from "./NavButton";
import "../Styles/FooterNav.css";

function FooterNav() {
    return (
        <section className="footerNav__container">
            <NavButton />
            <NavButton />
            <NavButton />
        </section>
    );
}

export default FooterNav;
