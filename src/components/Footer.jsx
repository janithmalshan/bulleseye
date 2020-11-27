import React from "react";
import logo from "../assets/images/logo-footer.svg"

export const Footer = () => {
    return (
        <footer className="ui-footer">
            <div className="ui-footer__inner">
                <div>
                    <img className="ui-footer__logo" src={logo} alt="Prestau"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                </div>
                <div className="ui-footer__grid">
                    <div>
                        <h3>Service</h3>
                        <FooterLink href="/" link="App"/>
                        <FooterLink href="/" link="Coding"/>
                        <FooterLink href="/" link="Documentation"/>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <FooterLink href="/" link="Email"/>
                        <FooterLink href="/" link="Phone"/>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <FooterLink href="/" link="About"/>
                        <FooterLink href="/" link="Privacy Policy"/>
                        <FooterLink href="/" link="Careers"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterLink = (props) => {
    return (
        <a href={props.href} className="ui-footer__link">{props.link}</a>
    )
};
