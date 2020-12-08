import React from "react";
import menu from "../../assets/images/ic-menu.svg";

export const Contact = (props) => {
    return (
        <section className="ui-main__sec-contact" id={props.id}>
            <form >
            <p>Your Name:</p>
            <input name='name' type='text' placeholder='name…' className='form__input' />
    <p>Subject:</p>
    <input name='subject' type='text' placeholder='Subject…' className='form__input' />
    <p>Your Message:</p>
    <textarea name='message' type='text' placeholder='Your Message…' className='form__input-message'></textarea>
    <button>Send Message</button>
</form>
            <div className="ui-contact">
                <h1>CONTACT US</h1>
                <p>Our agents will respond to you within 24 hours.</p>
                <form>
                    <div className="ui-contact__form">
                        <input className="div1 ui-input" type="text" placeholder={'Name'}/>
                        <input className="div2 ui-input" type="text" placeholder={'Email Address'}/>
                        <div className="div3">
                            <label>How can we help?</label>
                            <textarea className="ui-input" placeholder={'Your message here'} rows={'10'}></textarea>
                        </div>
                    </div>
                    <button className="ui-btn">SEND</button>
                </form>
            </div>
        </section>
    )
};
