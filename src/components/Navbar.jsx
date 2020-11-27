import React, {Component} from "react";
import menu from "../assets/images/ic-menu.svg";
import logo from "../assets/images/logo.svg";
import iconGuarantee from "../assets/images/ic-guarantee.svg";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

    render() {
        return (
            <header className="ui-navbar">
                <a href="/" className="ui-navbar__logo">
                    <img src={logo} alt="logo"/>
                </a>
                <div className={`ui-navbar__menu ${this.state.active ? '' : 'active-mobile'}`}>
                    <a href="/" className="ui-navbar__btn">SUBSCRIBE NOW!</a>
                    <NavLink href="/" link="How It Works"/>
                    <NavLink href="/" link="Meet Bullseye"/>
                    <NavLink href="/" link="PetSmart Charities"/>
                    <NavLink href="/" link="Weekly Giveaways"/>
                    <NavLink href="/" link="Help"/>
                </div>
                <img className="ui-navbar__guarantee" src={iconGuarantee} alt="guarantee"/>
                <button className="ui-navbar__menu-btn" onClick={() => this.setState({active: !this.state.active})}><img
                    src={menu} alt="menu"/></button>
            </header>
        )
    }
}

const NavLink = (props) => {
    return (
        <a href={props.href} className="ui-navbar__menu-link">{props.link}</a>
    )
};
