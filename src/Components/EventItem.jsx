import { Link } from "react-router-dom";
import "../Styles/EventItem.css";

function EventItem({ event }) {
    const { name, price, where, when } = event;

    return (
        <Link to={`/events/${name}`}>
            <article className="event__item">
                <section className="event__item--date">
                    <p>{when.date}</p>
                </section>
                <section className="event__item--info">
                    <h2 className="event__item--artist">{name}</h2>
                    <p className="event__item--location">{where}</p>
                    <p className="event__item--time">
                        {when.from}-{when.to}
                    </p>
                    <p className="event__item--price">{price} SEK</p>
                </section>
            </article>
        </Link>
    );
}

export default EventItem;
