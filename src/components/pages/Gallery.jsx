// Gallery.js

import React, { useState } from 'react';
import '../../assets/css/gallery.css';
import image1 from '../../assets/images/_E5A0967.jpg';
import image2 from '../../assets/images/_E5A0974.jpg';
import image3 from '../../assets/images/_E5A0877.jpg';
import image4 from '../../assets/images/_E5A0792.jpg';
import image5 from '../../assets/images/_E5A0939.jpg';
import image6 from '../../assets/images/_E5A0948.jpg';
import image7 from '../../assets/images/_E5A0832.jpg';
import image8 from '../../assets/images/_E5A0935.jpg';

import image9 from '../../assets/images/_E5A0816.jpg';
import image10 from '../../assets/images/_E5A0828.jpg';
import image11 from '../../assets/images/_E5A0830.jpg';
import image12 from '../../assets/images/_E5A0896.jpg';
import image13 from '../../assets/images/_E5A0900.jpg';
import image14 from '../../assets/images/_E5A0912.jpg';
import image15 from '../../assets/images/_E5A0909.jpg';
import image16 from '../../assets/images/_E5A0863.jpg';
import videoSource from '../../assets/video/eumake.webm';
import background from '../../assets/images/background2.jpg';

const Gallery = () => {
  const images = [
    { src: image3, caption: 'Jacky registering a client' },
    { src: image2, caption: 'Team photo' },
    { src: image7, caption: 'Sample collection' },
    { src: image8, caption: 'Sample processing' },
    { src: image5, caption: 'Aggrey (Pathologist)' },
    { src: image6, caption: 'Our team' },
    { src: image1, caption: 'Eunice (Director & Founder)' },
    { src: image4, caption: 'Jacky (Receptionist)' },
    // Add more images as needed to reach a total of 16
  ];

  const images2 = [
    { src: image9, caption: 'Plebotomy room' },
    { src: image10, caption: 'Client preparation' },
    { src: image11, caption: 'lood sample collection' },
    { src: image12, caption: 'Lab Equipment' },
    { src: image13, caption: 'Lab Equipment' },
    { src: image14, caption: 'Lab Equipment' },
    { src: image15, caption: ' Sample processing' },
    { src: image16, caption: 'Facilities' },
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

const generateGallery = (imagesArray, includeVideo = true) => (
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
      {imagesArray.map((image, index) => (
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


return (
  <>
    {currentPage === 0 && generateGallery(images, true)}
    {currentPage === 1 && generateGallery(images2, false)}
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

// ...


};

export default Gallery;
