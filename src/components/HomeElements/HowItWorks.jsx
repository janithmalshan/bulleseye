import React from "react";
import img1 from "../../assets/images/img-how-1.svg"
import img2 from "../../assets/images/img-how-2.svg"
import img3 from "../../assets/images/img-how-3.svg"

export const HowItWorks = (props) => {
    return (
        <section className="ui-main__sec-how" id={props.id}>
            <h1 className="text-center">HOW IT WORKS</h1>
            <div className="ui-how">
                <div>
                    <img className="img" src={img1}/>
                    <div>
                        <h1>1</h1>
                        <p>Subscribe for less <br/>
                            than 10 cents a day</p>
                    </div>
                </div>
                <div>
                    <img className="img" src={img2}/>
                    <div>
                        <h1>2</h1>
                        <p>Whitelist our email <br/>
                            "<u>secret@bullseye.deals</u>"</p>
                    </div>
                </div>
                <div>
                    <img className="img" src={img3}/>
                    <div>
                        <h1>3</h1>
                        <p>Check your Inbox every <br/>
                            morning for best deals!</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
