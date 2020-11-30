import React from "react";
import icGuarantee from "../../assets/images/ic-guarantee.svg";
import imgGiveaway from "../../assets/images/img-giveaway.svg";

export const Giveaways = () => {
    return (
        <section className="ui-main__sec-giveaway">
            <div className="ui-giveaway">
                <h1>WEEKLY GIVEAWAYS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tortor eu est sollicitudin mattis id
                    quis diam. Suspendisse sagittis condimentum ligula a ullamcorper. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <h2>$25, $50, $100, $250, $500</h2>
                <img src={imgGiveaway} className="img"/>
                <button className="ui-btn">SUBSCRIBE NOW!</button>
            </div>
        </section>
    )
};
