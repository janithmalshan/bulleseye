import React from "react";
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';

export const Contact = (props) => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById('formContact').reset();
    }

    return (
        <section className="ui-main__sec-contact" id={props.id}>
            <div className="ui-contact">
                <h1>CONTACT US</h1>
                <p>Our agents will respond to you within 24 hours.</p>
                <form id="formContact" onSubmit={sendEmail}>
                    <div className="ui-contact__form">
                        <input className="div1 ui-input" type="text" placeholder={'Name'} name="user_name"/>
                        <input className="div2 ui-input" type="email" placeholder={'Email Address'} name="user_email"/>
                        <div className="div3">
                            <label>How can we help?</label>
                            <textarea className="ui-input" placeholder={'Your message here'} rows={'10'} name="message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="ui-btn">SEND</button>
                </form>
            </div>
        </section>
    )
};
