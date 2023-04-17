import { NavLink } from "react-router-dom";
import "../Styles/headerNav.css";
import { motion, AnimatePresence } from "framer-motion";
import { dataContext } from "../App";
import { useContext, useEffect, useState } from "react";

function HeaderNav({ to }) {
    const [event, setCart, cart] = useContext(dataContext);
    const [cartCount, setCartCount] = useState(cart.length);

    useEffect(() => {
        setCartCount(cart.length);
    }, [cart]);

    useEffect(() => {}, [cartCount]);

    return (
        <nav className="navbar">
            <NavLink to={to}>
                <img src="/src/assets/arrow_back.svg" alt="arrow back" />
            </NavLink>
            <NavLink to="/orders">
                <AnimatePresence initial={false}>
                    {cartCount > 0 && (
                        <motion.div
                            initial={{ scale: 0, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.6,
                            }}
                            exit={{
                                scale: 0,
                                transition: { type: "tween", duration: 0.15 },
                            }}
                            key="counter"
                            className="order-count"
                        >
                            <motion.p className="order-count__number">
                                {cartCount}
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <img src="/src/assets/shopping_cart2.svg" alt="shopping cart" />
            </NavLink>
        </nav>
    );
}

export default HeaderNav;
