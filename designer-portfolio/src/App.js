import React from 'react';
import './Styles/App.css'
import MyNavbar from "./Navbar";
import PortfolioPage from "./PortfolioPage";

function App() {
    return (
        <div className="App">
            <MyNavbar/>
            <div className="body">
                <PortfolioPage />
                <div id="works">Works Section</div>
                <div id="links">Links Section</div>
                <div id="contacts">Contacts Section</div>
            </div>
        </div>
    );
}

export default App;