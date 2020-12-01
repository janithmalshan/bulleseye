import React from "react";
import imgGuarantee from "../../assets/images/img-guarantee.svg"
import icGuarantee from "../../assets/images/ic-guarantee.svg"
import {UiContentWrapper} from "../GridLayout";

export const Guarantee = () => {
    return (
        <section className="ui-main__sec-guarantee">
            <UiContentWrapper>
                <div className="ui-guarantee">
                    <div className="ui-guarantee__content">
                        <img src={icGuarantee} className="img-guarantee"/>
                        <div>
                            <h1>MONEY-BACK GUARANTEE</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tortor eu est sollicitudin
                                mattis id quis diam. Suspendisse sagittis condimentum ligula a ullamcorper. Vestibulum ante
                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        </div>
                    </div>
                    <div><img src={imgGuarantee} className="img"/></div>
                </div>
            </UiContentWrapper>
        </section>
    )
};
