import React, { useState, useRef, useEffect } from 'react';
import '../../assets/css/PharmacyCarousel.css';
import lab from '../../assets/images/lab.jpg';
import lab1 from '../../assets/images/lab1.jpg';
import lab2 from '../../assets/images/lab2.jpg';
import down from '../../assets/images/down.png';
import previous from '../../assets/images/previous.png';

import next from '../../assets/images/next.png';

const PharmacyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesRef = useRef(null);

  const data = [
    {
      image: lab,
      text: 'Come Take a look',
    },
    {
      image: lab1,
      text: 'Come Take a look',
    },
    {
      image: lab2,
      text: 'Come Take a look',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handleScrollDown = () => {
    // Scroll down to the services section
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  // Use useEffect to set up the interval for changing images
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change to the next image
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 10000); // Change image every 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [data.length]); // Add data.length as a dependency to handle changes in the length of the data array

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <img src={data[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-caption">
          <p>{data[currentIndex].text}</p>
        </div>
      </div>
      <button className="prev-button" onClick={handlePrev}>
      <img className="prev" src={previous} alt="prev" />
      </button>
      <button className="next-button" onClick={handleNext}>
      <img className="next" src={next} alt="next" />
      </button>

      <div className="see-more" onClick={handleScrollDown}>
        <img className="down animated bounce" src={down} alt="down" />
      </div>
    </div>
  );
};

export default PharmacyCarousel;
