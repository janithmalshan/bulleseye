import React from "react";
import payTypes from "../../assets/images/ic-subscribe-iconset.svg"
import labelPercent50 from "../../assets/images/ic-deal-50.svg"
import labelPercent65 from "../../assets/images/ic-deal-65.svg"
import imgSubscribe from "../../assets/images/img-subscribe.svg"

export const Subscribe = () => {
    return (
        <section className="ui-main__sec-subscribe">
            <div className="ui-subscribe">
                <h1>SUBSCRIBE</h1>
                <p>*Limited Time Savings!</p>
                <input className="ui-input" placeholder="Enter Email Address"/>
                <div className="ui-subscribe__wr">
                    <div className="ui-subscribe__wr-item">
                        <h1>$ 2.95/month</h1>
                        <h2>$ 5.90/month</h2>
                        <p>Less than 10¢ a day</p>
                        <p>25¢ per subscription goes to the PetSmart charities</p>
                        <p>Weekly Gift Card Giveaways!</p>
                        <img src={payTypes} height={30}/>
                        <button className="ui-btn-paypal"/>
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
