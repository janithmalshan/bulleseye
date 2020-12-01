import React, {Component} from "react";
import {UiMainWrapper} from "./GridLayout";
import {Contact} from "./HomeElements/Contact";
import {Subscription} from "./HomeElements/Subscription";
import {Subscribe} from "./HomeElements/Subscribe";
import {Guarantee} from "./HomeElements/Guarantee";
import {Giveaways} from "./HomeElements/Giveaways";
import {Main} from "./HomeElements/Main";
import {HowItWorks} from "./HomeElements/HowItWorks";
import {SlideShow} from "./HomeElements/SlideShow";

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
                <Main/>
                <HowItWorks id="section1"/>
                <SlideShow id="section2"/>
                <Subscription id="section3"/>
                <Giveaways id="section4"/>
                <Guarantee id="section5"/>
                <Subscribe id="section6"/>
                <Contact id="section7"/>
            </UiMainWrapper>
        )
    }
}

