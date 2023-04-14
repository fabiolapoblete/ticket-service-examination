import "../Styles/TicketsPage.css";

function TicketItem({ event }) {
    const { name, where, when } = event;

    return (
        event && (
            <article className="ticket__container">
                <section className="ticket__artist">
                    <p className="ticket__sub-title">What</p>
                </section>
                <h1>{name}</h1>
                <section className="ticket__location">
                    <p className="ticket__sub-title">Where</p>
                    <h2>{where}</h2>
                    <p>Göteborgs universitet, Pedagogen, hus A</p>
                </section>
                <section className="ticket__date-time">
                    <section>
                        <p className="ticket__sub-title">When</p>
                        <h3>{when.date}</h3>
                    </section>
                    <section>
                        <p className="ticket__sub-title">From</p>
                        <h3>{when.from}</h3>
                    </section>
                    <section>
                        <p className="ticket__sub-title">To</p>
                        <h3>{when.to}</h3>
                    </section>
                </section>
                <section className="ticket__info">
                    <p className="ticket__sub-title">Info</p>
                    <p>Section C - seat 233, bring umbrella</p>
                </section>
                <section className="ticket__barcode">
                    <img
                        src="src\assets\barcode.png"
                        alt="Scannable barcode representing your ticket"
                    />
                    <p>#A2ED7</p>
                </section>
            </article>
        )
    );
}

export default TicketItem;
