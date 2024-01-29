// CustomerReview.js

import React, { useState } from 'react';
import '../../assets/css/review.css';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import star from '../../assets/images/review-icon.png';
import user from '../../assets/images/user.png';
import userLight from '../../assets/images/user-light.png';

const customerReviews = [
  {
    id: 1,
    description: "I'm happy with how Eumake handled me😊. The personnel made the process go quite well.",
    name: "Janet Wanjiru",
    stars: 4
  },
  {
    id: 2,
    description: "We were given an appointment on a weekend since it was the only time we were available. It was a surprise since most labs aren't usually open. We received confirmation and a reminder via email and text for our appointment. Then we got our GDM test results emailed to us in less than four hours. An extremely effective service for sure.",
    name: "Simon Khaemba",
    stars: 4
  },
  {
    id: 3,
    description: "People should feel confident about using Eumake. I was treated fairly 😌",
    name: "Paul Mogeni",
    stars: 4
  },
  {
    id: 4,
    description: "Jacky ensured a warm homely environment at the lab and a seamless joyful experience, even though I was scared of needles.",
    name: "Fridah Chebet",
    stars: 4
  },
  {
    id: 5,
    description: "I needed a test about my general well-being, and I was confused about the right test to take, but the customer service representative was very eager to help. I booked an appointment for the test, and Jacky was super helpful by directing me with a phone call to the lab when I lost my way.",
    name: "Said Juma",
    stars: 4
  }, {
    id: 6,
    description: "Eumake's sample collection capabilities ensured that i had my samples taken from the comfort of my home while on prescribed bed rest.",
    name: "Faith Kilonzi",
    stars: 4
  }
];

const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 3; // Number of reviews to display per page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = customerReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(customerReviews.length / reviewsPerPage);

  const paginate = (pageNumber) => {
    const newPage = (pageNumber + totalPages - 1) % totalPages + 1;
    setCurrentPage(newPage);
  };

  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="main-container customer-review">
      <div className="customer-review-header">
        <h3 className="italic-bold">What Our Customers Say</h3>
      </div>
      <div className="reviews">
        <div className="review-icon left">
          <img src={left} alt="left" onClick={handleLeftClick} />
        </div>
        {currentReviews.map((review,index) => (
          <div key={review.id} className="review">
            <div className="review-desc">

              <div className="review-desc-body">
                <div className="review-testimonial">
                  <div className="user-icon">
                    {index === 1 ? (
                      <img
                        src={userLight}
                        alt="user"
                        style={{ backgroundImage: `url(${userLight})` }}
                      />
                    ) : (
                      <img src={user} alt="user" />
                    )}
                  </div>

                  <p className='reviewer-name'>{review.name}</p>
                  <p className='reviewer-desc'>{"\"" + review.description + "\""}</p>
                  <div className="review-rating">
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
        <div className="review-icon right">
          <img src={right} alt="right" onClick={handleRightClick} />
        </div>
      </div>
      {customerReviews.length > reviewsPerPage && (
        <div className="pagination">
          <p>{`${currentPage} / ${totalPages}`}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerReview;
