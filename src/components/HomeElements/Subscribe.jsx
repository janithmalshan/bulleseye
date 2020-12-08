import React, { useRef, useEffect } from "react";
import payTypes from "../../assets/images/ic-subscribe-iconset.svg"
import labelPercent50 from "../../assets/images/ic-deal-50.svg"
import labelPercent65 from "../../assets/images/ic-deal-65.svg"
import imgSubscribe from "../../assets/images/img-subscribe.svg"
import PayPalButton from "./PayPalBtn"

const Results = () => (
    <div id="results" className="ui-subscribe">
        <h1>SUBSCRIBE</h1>
        <p style={{color: '#39b54a'}}>*Payment Success!</p>
    </div>
)

export const Subscribe = (props) => {
    const paypal = useRef();
    const paypalKeyM = "AatOQhODvDbtXf59KbuwCdaTvGXkurbe4qSXguXoit6o20lDRCZprvqzJF5xhGWaxlaRxITTKHAnWy5r";   //client-id
    const paypalKeyY = "AatOQhODvDbtXf59KbuwCdaTvGXkurbe4qSXguXoit6o20lDRCZprvqzJF5xhGWaxlaRxITTKHAnWy5r";   //client-id

    const [showResults, setShowResults] = React.useState(false)

    const paypalSubscribeM = (data, actions) => {
        return actions.subscription.create({
            'plan_id': "P-9BV25233YH3816747L7EHYLY",
            'application_context': {
                "brand_name": "BULLSEYE DEALS",
                "shipping_preference": "NO_SHIPPING"
            }
        });
    };
    const paypalSubscribeY = (data, actions) => {
        return actions.subscription.create({
            'plan_id': "P-4L440189JC489602DL7EH2QY",
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
        setShowResults(true);
    };

   /* useEffect(() => {
        window.paypal
            .Buttons({
                style: {
                    shape: 'pill',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'subscribe'
                },
                createSubscription: function(data, actions) {
                    return actions.subscription.create({
                        // 'plan_id': 'P-5L726517LW392523YL7F5EEQ'//live
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
    }, []);*/
    return (
        <section className="ui-main__sec-subscribe" id={props.id}>
            { showResults ? <Results /> : <div className="ui-subscribe">
                    <h1>SUBSCRIBE</h1>
                    <p>*Limited Time Savings!</p>

                    <input className="ui-input" placeholder="Enter Email Address"/>
                    <div className="ui-subscribe__wr">
                        <div className="ui-subscribe__wr-item">
                            <h1>$ 2.95/month</h1>
                            <h2>$ 5.90/month</h2>
                            <p>Less than 10¢ a day</p>
                            {/*<div id="paypal-button-container"></div>*/}
                            <p>25¢ per subscription goes to the PetSmart charities</p>
                            <p>Weekly Gift Card Giveaways!</p>
                            <img src={payTypes} height={30}/>
                            <img className="ui-label-icon" src={labelPercent50}/>
                            <div className="ui-subscribe__pay">
                                <PayPalButton
                                    createSubscription={paypalSubscribeM}
                                    onApprove={paypalOnApprove}
                                    catchError={paypalOnError}
                                    onError={paypalOnError}
                                    onCancel={paypalOnError}
                                    clientId={paypalKeyM}
                                />
                            </div>
                        </div>
                        <div className="ui-subscribe__wr-item">
                            <h1>$ 24.78/year</h1>
                            <h2>$ 70.80/year</h2>
                            <p>Less than 10¢ a day</p>
                            <p>25¢ per subscription goes to the PetSmart charities</p>
                            <p>Weekly Gift Card Giveaways!</p>
                            <img src={payTypes} height={30}/>
                            <img className="ui-label-icon" src={labelPercent65}/>
                            <div className="ui-subscribe__pay">
                                <PayPalButton
                                    createSubscription={paypalSubscribeY}
                                    onApprove={paypalOnApprove}
                                    catchError={paypalOnError}
                                    onError={paypalOnError}
                                    onCancel={paypalOnError}
                                    clientId={paypalKeyY}
                                />
                            </div>
                        </div>
                    </div>
                    <img src={imgSubscribe} width={'100%'}/>
                </div>
            }
        </section>
    )
};
