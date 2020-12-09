import React from "react";
import logo from "../assets/images/logo-footer.svg"
import {UiContentWrapper} from "./GridLayout";
import footerFb from "../assets/images/ic-footer-fb.svg"
import footerInsta from "../assets/images/ic-footer-insta.svg"
import footerPrintrst from "../assets/images/ic-footer-printrst.svg"
import footerYou from "../assets/images/ic-footer-youtube.svg"
import {Link, animateScroll as scroll} from "react-scroll";

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
                            <FooterLink to="section1" link="How It Works"/>
                            <FooterLink to="section2" link="Meet Bullseye"/>
                            <FooterLink to="section3" link="PetSmart Charities"/>
                        </div>
                        <div>
                            <FooterLink to="section4" link="Weekly Giveaways"/>
                            <FooterLink to="section5" link="Money-back Guarantee"/>
                            <FooterLink to="section7" link="Help"/>
                        </div>
                        <div>
                            <a target="_blank" href="/terms" className="ui-footer__link">Terms and Conditions</a>
                            <a target="_blank" href="/privacy" className="ui-footer__link">Privacy Policy</a>
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
        // <a href={props.href} className="ui-footer__link">{props.link}</a>
        <Link to={props.to} className="ui-footer__link" onClick={props.onClickMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active">{props.link}</Link>
    )
};
