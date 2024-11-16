import React, { useEffect, useState } from "react";
import './Styles/PortfolioPageStyles.css';
import client from "./contentful";

const PortfolioPage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await client.getEntries({ content_type: 'imageBank' });
                console.log('Full response', response);

                if (response.items) {
                    const formattedImages = response.items[0].fields.imagebank.map((item, index) => {
                        console.log('Item fields:', item.fields);
                        
                        return {
                            src: item.fields.file.url,
                            size: response.items[0].fields.size[index],
                        };
                    });

                    setImages(formattedImages);
                } else {
                    console.error("No items found in response");
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="portfolio-grid">
            {images.map((image, index) => (
                <div key={index} className={`portfolio-item ${image.size}`}>
                    <img src={image.src} alt={image.size || "Image"} />
                </div>
            ))}
        </div>
    );
};

export default PortfolioPage;
