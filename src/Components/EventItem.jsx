import { Link } from "react-router-dom";
import "../Styles/EventItem.css";
import { motion } from "framer-motion";

function EventItem({ event, variants, delay }) {
    const { name, price, where, when } = event;

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 130,
    };

    const MotionLink = motion(Link);

    return (
        <MotionLink to={`/events/${name}`}>
            <motion.section className="event__item--wrapper">
                <article className="event__item">
                    <section className="event__item--date">
                        <p>{when.date}</p>
                    </section>
                    <section className="event__item--info">
                        <h2 className="event__item--artist">{name}</h2>
                        <p className="event__item--location">{where}</p>

                        <section className="event__item--timePrice-wrapper">
                            <p className="event__item--time">
                                {when.from} - {when.to}
                            </p>
                            <p className="event__item--price">{price} SEK</p>
                        </section>
                        <span className="event__item--underscore"></span>
                    </section>
                </article>
            </motion.section>
        </MotionLink>
    );
}

export default EventItem;
