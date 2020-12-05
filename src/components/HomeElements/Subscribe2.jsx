import React, { useRef, useState } from "react";
import payTypes from "../../assets/images/ic-subscribe-iconset.svg"
import labelPercent50 from "../../assets/images/ic-deal-50.svg"
import labelPercent65 from "../../assets/images/ic-deal-65.svg"
import imgSubscribe from "../../assets/images/img-subscribe.svg"
// import PayPalButton from "./PayPalBtn"
import ReactDOM from "react-dom"

import PayPal from "./PayPalBtn";

// const paypalSubscribe = (data, actions) => {
//     return actions.subscription.create({
//         'plan_id': "P-9BV25233YH3816747L7EHYLY",
//     });
// };
// const paypalOnError = (err) => {
//     console.log("Error")
// };
// const paypalOnApprove = (data, detail) => {
// // call the backend api to store transaction details
//     console.log("Payapl approved")
//     console.log(data.subscriptionID)
// };

export const Subscribe = (props) => {
    const paypal = useRef();
    const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
    const [checkout, setCheckout] = React.useState(false);
    const createOrder = (data, actions) =>{
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

    return (
        <section className="ui-main__sec-subscribe" id={props.id}>
            <div className="ui-subscribe">
                <h1>SUBSCRIBE</h1>
                <p>*Limited Time Savings!</p>

                {/*{(checkout === true)
                    ? <div className="payment-div">
                        <ReactPayPal
                            total={500}
                        />
                    </div>

                    :<div>
                        <h1>React-PayPal</h1>
                        <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
                    </div>
                }*/}
                <input className="ui-input" placeholder="Enter Email Address"/>
                <div className="ui-subscribe__wr">
                    <div className="ui-subscribe__wr-item">
                        <h1>$ 2.95/month</h1>
                        <h2>$ 5.90/month</h2>
                        <p>Less than 10¢ a day</p>
                        <p>25¢ per subscription goes to the PetSmart charities</p>
                        <p>Weekly Gift Card Giveaways!</p>
                        <img src={payTypes} height={30}/>
                        {/*<PayPalButton*/}
                        {/*    amount = "0.1"*/}
                        {/*    currency = "USD"*/}
                        {/*    createSubscription={paypalSubscribe}*/}
                        {/*    onApprove={paypalOnApprove}*/}
                        {/*    catchError={paypalOnError}*/}
                        {/*    onError={paypalOnError}*/}
                        {/*    onCancel={paypalOnError}*/}
                        {/*/>*/}
                        <img className="ui-label-icon" src={labelPercent50}/>
                        <PayPalButton
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                        />

                        <PayPal />
                    </div>
                    <div className="ui-subscribe__wr-item">
                        <h1>$ 24.78/year</h1>
                        <h2>$ 70.80/month</h2>
                        <p>Less than 10¢ a day</p>
                        <p>25¢ per subscription goes to the PetSmart charities</p>
                        <p>Weekly Gift Card Giveaways!</p>
                        <img src={payTypes} height={30}/>
                        <button className="ui-btn-paypal"/>
                        <img className="ui-label-icon" src={labelPercent65}/>
                    </div>
                </div>
                <img src={imgSubscribe} width={'100%'}/>
            </div>
        </section>
    )
};
