import "../styles/eventPrice.css";

function EventPrice() {
  return (
    <article className="eventpriceContainer">
      <section className="eventpriceContainer__price">1050 sek</section>
      <section className="eventpriceContainer__amount">
        <section>-</section>
        <section className="eventpriceContainer__amount__count">3</section>
        <section>+</section>
      </section>
    </article>
  );
}

export default EventPrice;
