import React from "react";
import logo from "../assets/images/logo-footer.svg"
import {UiContentWrapper} from "./GridLayout";
import footerFb from "../assets/images/ic-footer-fb.svg"
import footerInsta from "../assets/images/ic-footer-insta.svg"
import footerPrintrst from "../assets/images/ic-footer-printrst.svg"
import footerYou from "../assets/images/ic-footer-youtube.svg"

export const Footer = () => {
    return (
        <footer className="ui-footer">
            <div className="ui-footer__inner">
                <UiContentWrapper>
                    <div className="ui-footer__grid">
                        <div>
                            <img className="ui-footer__logo" src={logo} alt="Prestau"/>
                            <p>
                                Copyright © {(new Date().getFullYear())} BullsEye. All Rights Reserved.
                            </p>
                        </div>
                        <div>
                            <FooterLink href="/" link="How It Works"/>
                            <FooterLink href="/" link="Meet Bullseye"/>
                            <FooterLink href="/" link="PetSmart Charities"/>
                        </div>
                        <div>
                            <FooterLink href="/" link="Weekly Giveaways"/>
                            <FooterLink href="/" link="Money-back Guarantee"/>
                            <FooterLink href="/" link="Help"/>
                        </div>
                        <div>
                            <FooterLink href="/" link="Money-back Guarantee"/>
                            <FooterLink href="/" link="Privacy Policy"/>
                        </div>
                        <div>
                            <h3>FOLLOW US ON</h3>
                            <a href={'#'} target="_blank"><img src={footerFb}/></a>
                            <a href={'#'} target="_blank"><img src={footerInsta}/></a>
                            <a href={'#'} target="_blank"><img src={footerPrintrst}/></a>
                            <a href={'#'} target="_blank"><img src={footerYou}/></a>
                        </div>
                    </div>
                </UiContentWrapper>
            </div>
        </footer>
    )
}

const FooterLink = (props) => {
    return (
        <a href={props.href} className="ui-footer__link">{props.link}</a>
    )
};
