import "../Styles/LandingPage.css";
import PrimaryButton from "../Components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import PageTitle from "../Components/PageTitle";

function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/events");
  }

  return (
    <article className="wrapper">
      <section className="landingPage">
        <img
          className="landingPage__image"
          src={"src/assets/LandingPage-image.png"}
          alt="Welcoming image of Where Its At application"
        />
        {/* <h1 className="landingPage__header">Where it's @</h1> */}
        <PageTitle title="Where It's @" />
        <h2 className="landingPage__sub-header">Ticketing made easy</h2>
        <section>
          <PrimaryButton action={handleClick} title="Continue" />
        </section>
      </section>
    </article>
  );
}

export default LandingPage;
