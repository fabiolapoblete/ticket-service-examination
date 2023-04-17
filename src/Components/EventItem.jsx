import { Link } from "react-router-dom";
import "../Styles/EventItem.css";
import { motion } from "framer-motion";

function EventItem({ event, variants, custom, initial, animate }) {
    const { name, price, where, when } = event;

    return (
        <motion.div
            custom={custom}
            variants={variants}
            initial={initial}
            animate={animate}
        >
            <Link to={`/events/${name}`}>
                <motion.section className="event__item--wrapper">
                    <article className="event__item">
                        <motion.section className="event__item--date">
                            <p>{when.date}</p>
                        </motion.section>
                        <motion.section
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            className="event__item--info"
                        >
                            <h2 className="event__item--artist">{name}</h2>
                            <p className="event__item--location">{where}</p>

                            <section className="event__item--timePrice-wrapper">
                                <p className="event__item--time">
                                    {when.from} - {when.to}
                                </p>
                                <motion.p className="event__item--price">
                                    {price} SEK
                                </motion.p>
                            </section>
                            <span className="event__item--underscore"></span>
                        </motion.section>
                    </article>
                </motion.section>
            </Link>
        </motion.div>
    );
}

export default EventItem;
