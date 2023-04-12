import "../Styles/EventInfo.css";

function EventInfo({ event }) {
    const { name, where, when } = event;

    return (
        <>
            <section>
                <h2 className="event-info--name">{name}</h2>
                <p className="event-info--date">
                    {when.date}
                    {when.from} - {when.to}
                </p>
                <span className="event-info--location">{where}</span>
            </section>
        </>
    );
}

export default EventInfo;
