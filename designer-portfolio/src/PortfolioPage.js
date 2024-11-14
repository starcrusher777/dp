import React from "react";
import './Styles/PortfolioPageStyles.css'

import image1 from './Assets/image1.jpg';
import image2 from './Assets/image2.jpg';
import image3 from './Assets/image3.png';
import image4 from './Assets/image4.jpg';
import image5 from './Assets/image5.jpg';
import image6 from './Assets/image6.jpg';
import image7 from './Assets/image7.jpg';
import image8 from './Assets/image8.jpg';
import image9 from './Assets/image9.png';
import image10 from './Assets/image10.jpg';
import image11 from './Assets/image11.jpg';
import image12 from './Assets/image12.jpg';

const images = [
    { src: image1, alt: 'Work 1', size: 'large' },
    { src: image2, alt: 'Work 2', size: 'medium' },
    { src: image3, alt: 'Work 3', size: 'small' },
    { src: image4, alt: 'Work 4', size: 'medium' },
    { src: image5, alt: 'Work 5', size: 'large' },
    { src: image6, alt: 'Work 6', size: 'small' },
    { src: image7, alt: 'Work 7', size: 'large' },
    { src: image8, alt: 'Work 8', size: 'medium' },
    { src: image9, alt: 'Work 9', size: 'small' },
    { src: image10, alt: 'Work 10', size: 'medium' },
    { src: image11, alt: 'Work 11', size: 'large' },
    { src: image12, alt: 'Work 12', size: 'small' },
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