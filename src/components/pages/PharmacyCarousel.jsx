// PharmacyCarousel.js
import React, { useState, useRef, useEffect } from 'react';
import '../../assets/css/PharmacyCarousel.css';
import lab from '../../assets/images/lab.jpg';
import lab1 from '../../assets/images/lab1.jpg';
import lab2 from '../../assets/images/lab2.jpg';
import lab3 from '../../assets/images/banner4.jpg';
import down from '../../assets/images/down.png';

const PharmacyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesRef = useRef(null);
  const itemRef = useRef(null);

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
    {
      image: lab3,
      text: 'Come Take a look',
    },
  ];

  const handleScrollDown = (index) => {


      // Set active indicator and carousel item index
  setCurrentIndex(index);
  const indicators = document.querySelectorAll('.indicator');
  indicators[index].classList.add('active');
  for (let i = 0; i < indicators.length; i++) {
    if (i !== index) indicators[i].classList.remove('active');
  }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="carousel-container">
      <div class="carousel-progress-bar">
        <div class="progress-fill"></div>
      </div>

      <div className="carousel-item" ref={itemRef}>
        <img src={data[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-caption">
          <p>{data[currentIndex].text}</p>
        </div>
      </div>

      <div className="carousel-indicators">
        {data.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      <div className="see-more" onClick={handleScrollDown}>
        <img className="down animated bounce" src={down} alt="down" />
      </div>
    </div>
  );
};

export default PharmacyCarousel;
