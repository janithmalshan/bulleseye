import React from "react";
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';

const Results = () => (
    <div id="results" className="ui-contact">
        <h1>CONTACT US</h1>
        <p style={{color: '#39b54a'}}>*We received your message! <br/>Our agents will respond to you within 24 hours.</p>
    </div>
);

export const Contact = (props) => {

    const [showResults, setShowResults] = React.useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then((result) => {
                console.log(result.text);
                setShowResults(true);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById('formContact').reset();
    }

    return (
        <section className="ui-main__sec-contact" id={props.id}>
            {showResults ? <Results/> :
                <div className="ui-contact">
                    <h1>CONTACT US</h1>
                    <p>Our agents will respond to you within 24 hours.</p>
                    <form id="formContact" onSubmit={sendEmail}>
                        <div className="ui-contact__form">
                            <input className="div1 ui-input" type="text" placeholder={'Name'} name="from_name" required={true}/>
                            <input className="div2 ui-input" type="email" placeholder={'Email Address'}
                                   name="reply_to" required={true}/>
                            <div className="div3">
                                <label>How can we help?</label>
                                <textarea className="ui-input" placeholder={'Your message here'} rows={'10'}
                                          name="message" required={true}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="ui-btn">SEND</button>
                    </form>
                </div>
            }
        </section>
    )
};
