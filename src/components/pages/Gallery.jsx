// Gallery.js

import React, { useState } from 'react';
import '../../assets/css/gallery.css';
import image1 from '../../assets/images/_E5A0993.jpg';
import image2 from '../../assets/images/_E5A0974.jpg';
import image3 from '../../assets/images/_E5A0877.jpg';
import image4 from '../../assets/images/_E5A0938.jpg';
import image5 from '../../assets/images/_E5A0939.jpg';
import image6 from '../../assets/images/_E5A0948.jpg';
import image7 from '../../assets/images/_E5A0832.jpg';
import image8 from '../../assets/images/_E5A0935.jpg';
import videoSource from '../../assets/video/eumake.webm';

const Gallery = () => {
  const images = [
    { src: image1, caption: 'Image 1 Caption' },
    { src: image2, caption: 'Image 2 Caption' },
    { src: image3, caption: 'Image 3 Caption' },
    { src: image4, caption: 'Image 4 Caption' },
    { src: image5, caption: 'Image 5 Caption' },
    { src: image6, caption: 'Image 6 Caption' },
    { src: image7, caption: 'Image 7 Caption' },
    { src: image8, caption: 'Image 8 Caption' },
    // Add more images as needed to reach a total of 16
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const generateGallery = (includeVideo = true) => (
    <div className="main-container gallery">
      <h4>GALLERY</h4>
      {includeVideo && (
        <div className="video-container">
          <video controls width="100%">
            <source src={videoSource} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="image-gallery">
        <div className="main-image-container">
          <div className="image-container">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="selected-image pentagon"
            />
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
          {images.slice(8, 12).map((image, index) => (
            <div key={index} className="side-image lower-image">
              <img src={image.src} alt={image.caption} />
              <p className="caption">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {generateGallery()} {/* Page 1 with video */}
      {generateGallery(false)} {/* Page 2 without video */}
    </>
  );
};

export default Gallery;
