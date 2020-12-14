import React from "react";
import img from "../../assets/images/img-sec-main-cards.svg"
import imgMobile from "../../assets/images/img-sec-main-right.png"
import {Link} from "react-scroll";

export const Main = () => {
    return (
        <section className="ui-main__sec-main">
            <div className="ui-top-main__left">
                <img className="img-mobile" src={imgMobile}/>
                <h1>For under 10¢ a day!</h1>
                <p>Receive the hottest deals on the web,curated and chosen by our team of deal experts and delivered directly to your Inbox daily!</p>
                <div>
                    <Link to="section6"
                          smooth={true}
                          offset={-10}
                          duration={500} className="ui-btn">SUBSCRIBE NOW!</Link>
                    <Link to="section1"
                          smooth={true}
                          offset={-60}
                          duration={600} className="ui-btn outline">LEARN MORE</Link>
                </div>
            </div>
            <div className="ui-top-main__right">
                <h2>Weekly Gift Card Giveaways!</h2>
                <img className="img" src={img}/>
            </div>
        </section>
    )
};
