import "../Styles/EventInfo.css";

function EventInfo({ currentEvent }) {
    const { name, where, when } = currentEvent;

    return (
            <section className="event-info--wrapper">
                <h2 className="event-info--name">{name}</h2>
                <p className="event-info--date">
                    {when.date} {when.from} - {when.to}
                </p>
                <span className="event-info--location">{where}</span>
            </section>
    );
}

export default EventInfo;
