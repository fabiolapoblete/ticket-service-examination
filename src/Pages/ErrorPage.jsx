import { motion } from "framer-motion";

function ErrorPage() {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
        >
            ERROR PAGE
        </motion.h1>
    );
}

export default ErrorPage;
