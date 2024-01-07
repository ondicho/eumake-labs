import React, { useState } from 'react';
import '../../assets/css/gallery.css';
import image1 from '../../assets/images/_E5A0993.jpg';
import image2 from '../../assets/images/_E5A0974.jpg';
import image3 from '../../assets/images/_E5A0877.jpg';
import image4 from '../../assets/images/_E5A0938.jpg';
import image5 from '../../assets/images/_E5A0939.jpg';
import image6 from '../../assets/images/_E5A0948.jpg';

const Gallery = () => {
    const images = [
        { src: image1, caption: 'Image 1 Caption' },
        { src: image2, caption: 'Image 2 Caption' },
        { src: image3, caption: 'Image 3 Caption' },
    ]; // Add more images as needed

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
                            <img src={selectedImage.src} alt={selectedImage.caption} className="selected-image pentagon" />
                            <p className="caption">{selectedImage.caption}</p>
                        </div>
                        <div className="thumbnail-container">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.caption}
                                    className={`thumbnail ${selectedImage === image ? 'selected' : ''} pentagon-thumbnail`}
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="side-image-container">
                        <img src={image5} alt={image5.caption} className="side-image " />
                        <p className="caption">{image5.caption}</p>
                    </div>
                </div>
                <div className="image-gallery lower">
                    <img src={image4} alt={image4.caption} className="side-image " />
                    <p className="caption">{image4.caption}</p>
                    <img src={image6} alt={image6.caption} className="side-image " />
                    <p className="caption">{image6.caption}</p>
                </div>
            </div>
        </>
    );
}

export default Gallery;
