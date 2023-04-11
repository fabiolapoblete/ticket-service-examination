import "../Styles/TicketsPage.css";

function TicketsPage() {
    return (
        <article className="ticket__container">
            <section className="ticket__artist">
                <p className="ticket__sub-title">WHAT</p>
                <h1>Lasse-Stefanz</h1>
            </section>
            <section className="ticket__location">
                <p className="ticket__sub-title">Where</p>
                <h2>Kjell Härnqvistsalen</h2>
                <p>Göteborgs universitet, Pedagogen, hus A</p>
            </section>
            <section className="ticket__date-time">
                <section>
                    <p className="ticket__sub-title">When</p>
                    <h3>21 Mar</h3>
                </section>
                <section>
                    <p className="ticket__sub-title">From</p>
                    <h3>19.00</h3>
                </section>
                <section>
                    <p className="ticket__sub-title">To</p>
                    <h3>21.00</h3>
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
    );
}

export default TicketsPage;
