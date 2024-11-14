import React from "react";
import './Styles/PortfolioPageStyles.css'

import image1 from './Assets/image1.jpg';
import image2 from './Assets/image2.jpg';
import image3 from './Assets/image3.png';
import image4 from './Assets/image4.jpg';
import image5 from './Assets/image5.jpg';
import image6 from './Assets/image6.jpg';

const images = [
    { src: image1, alt: 'Work 1', size: 'large' },
    { src: image2, alt: 'Work 2', size: 'medium' },
    { src: image3, alt: 'Work 3', size: 'small' },
    { src: image4, alt: 'Work 4', size: 'large' },
    { src: image5, alt: 'Work 5', size: 'large' },
    { src: image6, alt: 'Work 6', size: 'small' },
];

const PortfolioPage = () => {
    return (
        <div className="portfolio-grid">
            {images.map((image, index) => (
                <div key={index} className={`portfolio-item ${image.size}`}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default PortfolioPage;