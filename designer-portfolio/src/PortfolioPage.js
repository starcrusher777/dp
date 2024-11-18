import React, { useEffect, useState } from "react";
import './Styles/PortfolioPageStyles.css';
import client from "./contentful";

const PortfolioPage = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const openModal = (image) => {
        console.log("Image clicked:", image); // Проверка клика на изображение
        setSelectedImage(image);
    };
    const closeModal = () => {
        console.log("Closing modal");  // Лог для проверки
        setSelectedImage(null);
    };

    console.log("Selected image:", selectedImage);

    console.log("Rendering modal:", selectedImage !== null);

    return (
        <div className="portfolio-grid">
            {images.map((image, index) => (
                <div key={index} className={`portfolio-item ${image.size}`}>
                    <img src={image.src} alt={image.size || "Image"}
                    onClick={() => openModal(image.src)}/>
                    {selectedImage && (
                        <div className="modal" onClick={closeModal}>
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <img className="modal-image" src={selectedImage} alt="Full-size view"/>
                            </div>
                        </div>
                    )}
                </div>
            ))}


        </div>
    );
};

export default PortfolioPage;
