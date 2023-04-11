import "../Styles/EventInfo.css";

function EventInfo() {
  return (
    <>
      <article className="event-info--container">
        <h2 className="event-info--heading">Event</h2>
        <p className="event-info--quote">
          You are about to score some tickets to
        </p>
        <h2 className="event-info--name">Lasse-Stefanz</h2>
        <p className="event-info--date">21 mars kl 19.00 - 21.00</p>
        <span className="event-info--location">@ Kjell Härnqvistsalen</span>

        <section className="event-info--ticket-selector">
          <h3 className="event-info-price">1050 SEK</h3>
          <section className="event-info--choser">
            <button className="event-info--choser-btn">-</button>
            <h4 >3</h4>
            <button className="event-info--choser-btn">+</button>
          </section>
        </section>
        <button className="event-info--primary-button">Lägg I varukorgen</button>
      </article>
    </>
  );
}

export default EventInfo;
