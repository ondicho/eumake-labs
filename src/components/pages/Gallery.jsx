// Gallery.js

import React, { useState } from 'react';
import '../../assets/css/gallery.css';
import image1 from '../../assets/images/_E5A0967.jpg';
import image2 from '../../assets/images/_E5A0974.jpg';
import image3 from '../../assets/images/_E5A0877.jpg';
import image4 from '../../assets/images/_E5A0938.jpg';
import image5 from '../../assets/images/_E5A0939.jpg';
import image6 from '../../assets/images/_E5A0948.jpg';
import image7 from '../../assets/images/_E5A0832.jpg';
import image8 from '../../assets/images/_E5A0935.jpg';
import videoSource from '../../assets/video/eumake.webm';
import background from '../../assets/images/background2.jpg';

const Gallery = () => {
  const images = [
    { src: image7, caption: 'Image 1 Caption' },
    { src: image2, caption: 'Image 2 Caption' },
    { src: image3, caption: 'Image 3 Caption' },
    { src: image8, caption: 'Image 4 Caption' },
    { src: image5, caption: 'Image 5 Caption' },
    { src: image6, caption: 'Image 6 Caption' },
    { src: image1, caption: 'Image 7 Caption' },
    { src: image4, caption: 'Image 8 Caption' },
    // Add more images as needed to reach a total of 16
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [currentPage, setCurrentPage] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };


  const switchPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // toggleActive()
  };

  // ...

  const generateGallery = (includeVideo = true) => (
    <div className="main-container gallery" style={{ backgroundImage: `url(${background})` }}>
      {includeVideo && (
        <div className="video-container">
          <h4>GALLERY</h4>
          <video controls width="100%">
            <source className='playWidth' src={videoSource} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="art-gallery">
        {images.map((image, index) => (
          <div key={index} className="art-piece">
            <img
              src={image.src}
              alt={image.caption}
              className="art-image playWidth"
            />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ...


  return (
    <>
      {currentPage === 0 && generateGallery(true)}
      {currentPage === 1 && generateGallery(false)}
      <div className="pagination-container">
        <button
          className={`pagination ${currentPage === 0 ? 'active' : ''}`}
          onClick={() => switchPage(0)}
        >
          1
        </button>
        <button
          className={`pagination ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => switchPage(1)}
        >
          2
        </button>
      </div>
    </>
  );

};

export default Gallery;
