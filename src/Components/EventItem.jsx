import "../Styles/EventItem.css";


function EventItem({ event }) {
  const { name, price, where, when } = event;
  const { date, from, to } = when;

  return (
    <article className="event__item">
      <section className="event__item--date">
        <p>{date}</p>
      </section>
      <section className="event__item--info">
        <h2 className="event__item--artist">{name}</h2>
        <p className="event__item--location">{where}</p>
        <p className="event__item--time">
          {from}-{to}
        </p>
        <p className="event__item--price">{price} SEK</p>
      </section>
    </article>
  );
}

export default EventItem;
