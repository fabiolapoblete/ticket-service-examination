import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { useContext } from "react";
import { dataContext } from "../App";

function OrderPageTotalPrice({ totalCartPrice }) {
    return (
        <>
            <section className="OrderPage__total_price">
                <p>Totalt värde på order</p>
                <h1>{totalCartPrice}</h1>
            </section>
        </>
    );
}

export default OrderPageTotalPrice;
