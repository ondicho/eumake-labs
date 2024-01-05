import React, { useState } from 'react';
import '../../assets/css/gallery.css';
import image1 from '../../assets/images/_E5A0993.jpg';
import image2 from '../../assets/images/_E5A0974.jpg';
import image3 from '../../assets/images/_E5A0877.jpg';
import image4 from '../../assets/images/_E5A0938.jpg';

import image5 from '../../assets/images/_E5A0939.jpg';
import image6 from '../../assets/images/_E5A0948.jpg';

const Gallery = () => {
    const images = [image1, image2, image3]; // Add more images as needed
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <>
            <div className="main-container gallery">
                <h4>GALLERY</h4>
                <div className="video-container">
                    {/* Add your video source and controls as needed */}
                    <video controls width="100%">
                        <source src="your-video-source.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="image-gallery">
                    <div className="main-image-container">
                        <div className="image-container">
                            <img src={selectedImage} alt="Selected" className="selected-image pentagon" />
                        </div>

                        <div className="thumbnail-container">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail ${selectedImage === image ? 'selected' : ''} pentagon-thumbnail`}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="side-image-container">
                        <img src={image5} alt="side" className="side-image " />
                    </div>
                </div>
                <div className="image-gallery lower">
                    <img src={image4} alt="side" className="side-image " />
                    <img src={image6} alt="side" className="side-image " />
                </div>
            </div>
        </>
    );
}

export default Gallery;
