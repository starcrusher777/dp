import React from 'react';
import './Styles/App.css'
import './Styles/SocialLinks.css'
import MyNavbar from "./Navbar";
import PortfolioPage from "./PortfolioPage";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";


function App() {
    return ( 
        <div className="App">
            <MyNavbar/>
            <div>
                <div id="works" className="app-links">
                    <PortfolioPage />
                </div>
                <div id="links" className="social-links">
                    <h2>Follow</h2>
                    <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30}/>
                    </a>
                    <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30}/>
                    </a>
                    <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30}/>
                    </a>
                    <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30}/>
                    </a>
                </div>
                <div id="contacts"></div>
            </div>
        </div>
    );
}

export default App;