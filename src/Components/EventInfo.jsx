import "../Styles/EventInfo.css";

function EventInfo({ event }) {
  const { name, price, where, when } = event;
  const { date, from, to } = when;

  return (
    <>
      <section>
        <h2 className="event-info--name">{name}</h2>
        <p className="event-info--date">{date}{from} - {to}</p>
        <span className="event-info--location">{where}</span>
      </section>
    </>
  );
}

export default EventInfo;
