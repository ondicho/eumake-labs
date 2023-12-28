// CustomerReview.js

import React, { useState } from 'react';
import '../../assets/css/home.css';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';
import star from '../../assets/images/review-icon.png';
import user from '../../assets/images/user.png';

const customerReviews = [
  {
    id: 1,
    description: "As Chief pathologist, John Doe is in charge of lab operations and customer delivery",
    name: "John Doe",
    stars: 4
  },
  {
    id: 2,
    description: "Jack Tom heads our finance department. He gives unto all their dues",
    name: "Jack Tom",
    stars: 5
  },
  {
    id: 3,
    description: "Another review description here...3",
    name: "Another Director",
    stars: 3
  },
  {
    id: 4,
    description: "Another review description here...4",
    name: "Another Director",
    stars: 4
  },
  {
    id: 5,
    description: "Another review description here...5",
    name: "Another Director",
    stars: 5
  },
  {
    id: 6,
    description: "Another review description here...6",
    name: "Another Director",
    stars: 3
  },
  {
    id: 7,
    description: "Another review description here...7",
    name: "Another Director",
    stars: 4
  }
];

const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 1; // Number of reviews to display per page
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
        {currentReviews.map((review) => (
          <div key={review.id} className="review">
            <div className="review-desc">
              <div className="review-icon">
                <img src={left} alt="left" onClick={handleLeftClick} />
              </div>
              <div className="review-desc-body">
                <div className="review-testimonial">
                  <div className="user-icon">
                    <img src={user} alt="user" />
                  </div>
                  <p className='reviewer-name'>{review.name}</p>
                  <p  className='reviewer-desc'>{"\"" + review.description + "\""}</p>
                  <div className="review-rating">
                    {Array.from({ length: review.stars }).map((_, index) => (
                      <img key={index} src={star} alt="star" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="review-icon">
                <img src={right} alt="right" onClick={handleRightClick} />
              </div>
            </div>
          </div>
        ))}
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
