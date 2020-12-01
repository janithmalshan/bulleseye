import React from "react";
import img from "../../assets/images/img-sec-main-cards.svg"

export const Main = () => {
    return (
        <section className="ui-main__sec-main">
            <div className="ui-top-main__left">
                <h1>For under 10¢ a day!</h1>
                <p>Receive the hottest deals on the web,curated and chosen by our team of deal experts and delivered directly to your Inbox daily!</p>
                <div>
                    <button className="ui-btn">SUBSCRIBE NOW!</button>
                    <button className="ui-btn outline">LEARN MORE</button>
                </div>
            </div>
            <div className="ui-top-main__right">
                <h2>Weekly Gift Card Giveaways!</h2>
                <img className="img" src={img}/>
            </div>
        </section>
    )
};
