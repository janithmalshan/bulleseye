import React, {Component} from "react";
import menu from "../assets/images/ic-menu.svg";
import logo from "../assets/images/logo.svg";
import iconGuarantee from "../assets/images/ic-guarantee.svg";
import {Link, animateScroll as scroll} from "react-scroll";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <header className="ui-navbar">
                <div className="ui-navbar__logo">
                    <img src={logo} alt="logo"
                         onClick={this.scrollToTop}/>
                </div>
                <div className={`ui-navbar__menu ${this.state.active ? '' : 'active-mobile'}`}>
                    <Link to="section6" className="ui-navbar__btn"
                          smooth={true}
                          offset={-10}
                          duration={500}
                          onClick={() => this.setState({active: !this.state.active})}>SUBSCRIBE NOW!</Link>
                    <NavLink to="section1" link="How It Works" onClickMenu={() => this.setState({active: !this.state.active})}/>
                    <NavLink to="section2" link="Meet Bullseye" onClickMenu={() => this.setState({active: !this.state.active})}/>
                    <NavLink to="section3" link="PetSmart Charities" onClickMenu={() => this.setState({active: !this.state.active})}/>
                    <NavLink to="section4" link="Weekly Giveaways" onClickMenu={() => this.setState({active: !this.state.active})}/>
                    <NavLink to="section7" link="Help" onClickMenu={() => this.setState({active: !this.state.active})}/>
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
        <Link to={props.to} className="ui-navbar__menu-link" onClick={props.onClickMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active">{props.link}</Link>
    )
};
