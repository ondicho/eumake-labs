// CustomerReview.js

import React, { useState } from 'react';
import '../../assets/css/home.css';
import left from '../../assets/images/left.png';
import right from '../../assets/images/right.png';

const customerReviews = [
    {
        id: 1,
        description: "As Chief pathologist, John Doe is in charge of lab operations and customer delivery",
        director: "John Doe",
    },
    {
        id: 2,
        description: "Jack Tom heads our finance department. He gives unto all their dues",
        director: "Jack Tom",
    },
    {
        id: 3,
        description: "Another review description here...3",
        director: "Another Director",
    },
    {
        id: 4,
        description: "Another review description here...4",
        director: "Another Director",
    },
    {
        id: 5,
        description: "Another review description here...5",
        director: "Another Director",
    },
    {
        id: 6,
        description: "Another review description here...6",
        director: "Another Director",
    },
    {
        id: 7,
        description: "Another review description here...7",
        director: "Another Director",
    }
];

const CustomerReview = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const reviewsPerPage = 1; // Number of reviews to display per page
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = customerReviews.slice(indexOfFirstReview, indexOfLastReview);
  
    const paginate = (pageNumber) => {
        // Ensure the page number is within bounds
        const newPage = (pageNumber + totalPages - 1) % totalPages + 1;
        setCurrentPage(newPage);
      };
    
  
    const handleLeftClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleRightClick = () => {
      if (currentPage < Math.ceil(customerReviews.length / reviewsPerPage)) {
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
                    <p>{review.description}</p>
                    <p className='director-sign'>{review.director}</p>
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
            <p>{`Page ${currentPage} of ${Math.ceil(customerReviews.length / reviewsPerPage)}`}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default CustomerReview;