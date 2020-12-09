import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";
import TermsConditions from "./components/Other/TermsConditions";
import PrivacyPolicy from "./components/Other/PrivacyPolicy";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar/>
                        <MainContent/>
                        <Footer/>
                    </Route>
                    <Route exact path="/terms" component={TermsConditions}/>
                    <Route exact path="/privacy" component={PrivacyPolicy}/>

                    <Route render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
