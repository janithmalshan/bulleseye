import React, { useRef, useEffect } from "react";
import payTypes from "../../assets/images/ic-subscribe-iconset.svg"
import labelPercent50 from "../../assets/images/ic-deal-50.svg"
import labelPercent65 from "../../assets/images/ic-deal-65.svg"
import imgSubscribe from "../../assets/images/img-subscribe.svg"
import PayPalButton from "./PayPalBtn"

const paypalSubscribe = (data, actions) => {
    return actions.subscription.create({
        'plan_id': "P-8K334788YX7869253L7F4CUQ",
    });
};
const paypalOnError = (err) => {
    console.log("Error")
    console.log(err)
};
const paypalOnApprove = (data, detail) => {
// call the backend api to store transaction details
    console.log("Payapl approved")
    console.log(data.subscriptionID)
};

export const Subscribe = (props) => {
    const paypal = useRef();


    useEffect(() => {
        window.paypal
            .Buttons({
                style: {
                    shape: 'pill',
                    color: 'gold',
                    layout: 'horizontal',
                    label: 'subscribe'
                },
                createSubscription: function(data, actions) {
                    return actions.subscription.create({
                        'plan_id': 'P-8K334788YX7869253L7F4CUQ'
                    });
                },
                // onApprove: function(data, actions) {
                //     alert(data.subscriptionID);
                // },
                // onApprove: function(data, actions) {
                //     alert('You have successfully created subscription ' + data.subscriptionID);
                // },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                },
            }).render('#paypal-button-container');
            // .render(paypal.current);
    }, []);
    return (
        <section className="ui-main__sec-subscribe" id={props.id}>
            <div className="ui-subscribe">
                <h1>SUBSCRIBE</h1>
                <p>*Limited Time Savings!</p>

                <input className="ui-input" placeholder="Enter Email Address"/>
                <div className="ui-subscribe__wr">
                    <div className="ui-subscribe__wr-item">
                        <h1>$ 2.95/month</h1>
                        <h2>$ 5.90/month</h2>
                        <p>Less than 10¢ a day</p>
                        <div id="paypal-button-container"></div>
                        <p>25¢ per subscription goes to the PetSmart charities</p>
                        <p>Weekly Gift Card Giveaways!</p>
                        <img src={payTypes} height={30}/>
                        <PayPalButton
                            amount = "0.1"
                            currency = "USD"
                            createSubscription={paypalSubscribe}
                            onApprove={paypalOnApprove}
                            catchError={paypalOnError}
                            onError={paypalOnError}
                            onCancel={paypalOnError}
                        />
                        <img className="ui-label-icon" src={labelPercent50}/>
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
