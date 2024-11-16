import React from 'react';
import './Styles/App.css'
import './Styles/SocialLinks.css'
import MyNavbar from "./Navbar";
import PortfolioPage from "./PortfolioPage";
import About from "./About";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";


const App = () => {
    const [lineClass, setLineClass] = React.useState('split');
    
    const handleMouseMove = (e) => {
        const socialLinks = document.querySelector('.social-links');
        const line = document.querySelector('.social-line');
        
        if (socialLinks && line) {
            const lineRect = line.getBoundingClientRect();
            const cursorY = e.clientY;

            if (cursorY < lineRect.top) {
                setLineClass("collapsed");
            } else if (cursorY > lineRect.bottom) {
                setLineClass("split");
            }
        }
    };
    
    return ( 
        <div className="App">
            <MyNavbar/>
            <div>
                <div id="works" className="app-links">
                    <PortfolioPage/>
                </div>
                <div id="about" className="about-me">
                    <About/>
                </div>
                <div id="links" className="social-links">
                    <h2 className="social-links-header">Follow</h2>
                    <div className="social-icons">
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
                    <div className={`social-line ${lineClass}`} onMouseMove={handleMouseMove}></div>
                </div>
                <div id="contacts">
                {/* Contacts section content */}
                </div>
            </div>
        </div>
    );
}

export default App;