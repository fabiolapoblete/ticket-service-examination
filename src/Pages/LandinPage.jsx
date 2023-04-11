import FooterNav from "../Components/FooterNav";
import "../Styles/LandingPage.css";

function LandingPage() {
    return (
        <section className="landingPage">
            <img
                className="landingPage__image"
                src={"src/assets/LandingPage-image.png"}
                alt="Welcoming image of Where Its At application"
            />
            <h1 className="landingPage__header">Where it's @</h1>
            <h2 className="landingPage__sub-header">Ticketing made easy</h2>
            <FooterNav />
        </section>
    );
}

export default LandingPage;
