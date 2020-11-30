import React from "react";
import logo from "../../assets/images/ic-petcharity.svg"

export const Subscription = () => {
    return (
        <section className="ui-main__sec-subscription">
            <div className="ui-subscription">
                <h1>25¢ per subscription goes to</h1>
                <img src={logo} className="img"/>
                <a target="_blank" href={'https://petsmartcharities.org/'}>https://petsmartcharities.org/</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non tortor eu est sollicitudin mattis id
                    quis diam. Suspendisse sagittis condimentum ligula a ullamcorper. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <p>In vitae sodales nulla. Nullam viverra ante odio. Etiam felis erat, mattis nec malesuada eget,
                    sagittis quis libero. Donec quis nulla nec odio fermentum porta. Nunc nisl ligula, elementum ac
                    ultricies sed, mollis eu ante. Donec posuere imperdiet metus at molestie. Aenean metus urna,
                    pellentesque varius purus eu, vestibulum sodales lorem.</p>
            </div>
        </section>
    )
};
