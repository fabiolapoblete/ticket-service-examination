import { motion } from "framer-motion";
import PrimaryButton from "../Components/PrimaryButton";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/events");
    };
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
            >
                Hoppsan, något gick snett. Du har kommit till fel sida. Här
                finns inget att visa
            </motion.h1>
            <PrimaryButton title={"Till våra events"} action={handleClick} />
        </>
    );
}

export default ErrorPage;
