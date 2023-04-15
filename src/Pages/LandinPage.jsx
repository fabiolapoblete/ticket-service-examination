import "../Styles/LandingPage.css";
import PrimaryButton from "../Components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";

function LandingPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/events");
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="wrapper"
        >
            <motion.section className="landingPage">
                <motion.img
                    className="landingPage__image"
                    src={"src/assets/LandingPage-image.png"}
                    alt="Welcoming image of Where Its At application"
                />
                <PageTitle title="Where It's @" />
                <motion.h2
                    transition={{ delay: 0.4 }}
                    className="landingPage__sub-header"
                >
                    Ticketing made easy
                </motion.h2>
                <motion.section
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.4 },
                    }}
                    initial={{ x: 20, opacity: 0 }}
                >
                    <PrimaryButton action={handleClick} title="Continue" />
                </motion.section>
            </motion.section>
        </motion.article>
    );
}

export default LandingPage;
