import "../Styles/EventItem.css";

function EventItem() {
    return (
        <article className="event__item">
            <section className="event__item--date">
                <p>
                    21
                    <br /> MAR
                </p>
            </section>
            <section className="event__item--info">
                <h2 className="event__item--artist">Lasse-Sefanz</h2>
                <p className="event__item--location">Kjell Härnqvistsalen</p>
                <p className="event__item--time">19.00 - 21.00</p>
                <p className="event__item--price">350 sek</p>
            </section>
        </article>
    );
}

export default EventItem;
