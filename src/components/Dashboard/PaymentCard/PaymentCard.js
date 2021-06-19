import React from 'react';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";


const PaymentCard = () => {
    return (
        <div>
            <h1>this is payment section</h1>
        </div>
    );
};

export default PaymentCard;