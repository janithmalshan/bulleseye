// import React, { useRef, useEffect } from "react";
//
// export default function PaypalBtn() {
//     const paypal = useRef();
//     useEffect(() => {
//         window.paypal
//             .Buttons({
//                 createSubscription: function(data, actions) {
//                     return actions.subscription.create({
//                         'plan_id': 'P-4L440189JC489602DL7EH2QY' // Creates the subscription
//                     });
//                 },
//                 // onApprove: function(data, actions) {
//                 //     alert('You have successfully created subscription ' + data.subscriptionID); // Optional message given to subscriber
//                 // },
//                 createOrder: (data, actions, err) => {
//                     return actions.order.create({
//                         intent: "CAPTURE",
//                         purchase_units: [
//                             {
//                                 description: "Cool looking table",
//                                 amount: {
//                                     currency_code: "USD",
//                                     value: 0.01,
//                                 },
//                             },
//                         ],
//                     });
//                 },
//                 onApprove: async (data, actions) => {
//                     const order = await actions.order.capture();
//                     console.log(order);
//                 },
//                 onError: (err) => {
//                     console.log(err);
//                 },
//             })
//             .render(paypal.current);
//     }, []);
//
//     return (
//         <div>
//             <div ref={paypal}></div>
//         </div>
//     );
// }



import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';
export function PayPalBtn(props) {
    const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
    const paypalKey = "AbERozXLdUXvCezq8S4sRjSHerQdPdFSzC8DO2Z1M-U6OCMvE3elNsZxyVJGZ5s0UiyPDCzWB77VAaOh";   //client-id
    return (
        <PayPalButton
            amount={amount}
            currency={currency}
            createSubscription={(data, details) => createSubscription(data, details)}
            onApprove={(data, details) => onApprove(data, details)}
            onError={(err) => onError(err)}
            catchError={(err) => catchError(err)}
            onCancel={(err) => onCancel(err)}
            options={{
                clientId: paypalKey,
                vault:true
            }}
            style={{
                shape: 'rect',
                color: 'gold',
                layout: 'horizontal',
            }}
        />
    );
}
export default PayPalBtn;
