import React from "react";
import img from "../../assets/images/img-meet.svg"
import {Slider} from "./Slider";

export const SlideShow = (props) => {
    return (
        <section className="ui-main__sec-slide" id={props.id}>
            <div className="ui-slide">
                <div className="ui-slide__left">
                    <div>
                        <img className="img" src={img}/>
                        <div>
                            <h2>MEET BULLSEYE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tortor eu est sollicitudin
                                mattis id quis diam. Suspendisse sagittis condimentum ligula a ullamcorper. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        </div>
                    </div>
                </div>
                <div className="ui-slide__right">
                    <Slider/>
                </div>
            </div>
        </section>
    )
};
