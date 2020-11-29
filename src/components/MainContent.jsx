import React, {Component} from "react";
import {UiMainWrapper} from "./GridLayout";
import {Contact} from "./HomeElements/Contact";
import {Subscription} from "./HomeElements/Subscription";
import {Subscribe} from "./HomeElements/Subscribe";
import {Guarantee} from "./HomeElements/Guarantee";
import {Giveaways} from "./HomeElements/Giveaways";

export class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

    render() {
        return (
            <UiMainWrapper>
                <section className="ui-main__sec1">
                    <div className="ui-main__sec1-img">
                    </div>
                    <div>
                        <h1>
                            Restaurant Integrator, Allowing Orders Through Delivery Partners
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </section>
                <section className="ui-main__sec-why">
                    <h2>Why Choose Us Than Others</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </section>
                <Subscription/>
                <Giveaways/>
                <Guarantee/>
                <Subscribe/>
                <Contact/>
            </UiMainWrapper>
        )
    }
}

