function TicketSelector() {
  return (
      <section className="event-info--ticket-selector">
        <h3 className="event-info-price">1050 SEK</h3>
        <section className="event-info--choser">
          <button className="event-info--choser-btn">-</button>
          <h4>3</h4>
          <button className="event-info--choser-btn">+</button>
        </section>
      </section>
  );
}

export default TicketSelector;
