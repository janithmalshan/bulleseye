import React from 'react';

import {Navbar} from "./components/Navbar";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*Main content area*/}
            <MainContent/>
            {/*End Main content area*/}
            <Footer/>
        </div>
    );
}

export default App;
