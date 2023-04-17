import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../Styles/headerNav.css";
import { motion, AnimatePresence } from "framer-motion";
import { dataContext } from "../App";
import { useContext, useEffect, useState } from "react";

function HeaderNav() {
    const [event, setCart, cart] = useContext(dataContext);
    const [cartCount, setCartCount] = useState(cart.length);
    const navigate = useNavigate();
    const path = useLocation();
    const cartStyle = {
        display:
            path.pathname === "/orders" || path.pathname === "/tickets"
                ? "none"
                : "flex",
    };

    const backBtnStyle = {
        visibility: path.pathname === "/events" ? "hidden" : "visible",
    };

    console.log(path, "Path here");
    useEffect(() => {
        setCartCount(cart.length);
    }, [cart]);

    useEffect(() => {}, [cartCount]);

    function navBack() {
        console.log("handleClick called");
        if (path.pathname === "/tickets") {
            navigate("/events");
            setCart([]);
        } else {
            navigate(-1);
        }
    }

    function navToCart() {
        navigate("/orders");
    }

    return (
        <nav
            style={{ display: path.pathname === "/" ? "none" : "flex" }}
            className="navbar"
        >
            <img
                style={backBtnStyle}
                onClick={navBack}
                src="/src/assets/arrow_back.svg"
                alt="arrow back"
            />
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
                        style={cartStyle}
                    >
                        <motion.p className="order-count__number">
                            {cartCount}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
            <img
                style={cartStyle}
                onClick={navToCart}
                src="/src/assets/shopping_cart2.svg"
                alt="shopping cart"
            />
        </nav>
    );
}

export default HeaderNav;
