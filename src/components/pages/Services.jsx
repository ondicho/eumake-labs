// Services.js
import React, { useState } from 'react';
import '../../assets/css/services.css';
import ServiceCard from '../layouts/ServiceCard';

const Services = () => {
  const testData = [
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
    { name: 'HIV Test', duration: '1 hour', requirements: 'Blood sample', selfTest: true },
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = testData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container service-container">
      <div className="testimonials-header">
        <h3 className="italic-bold">Our Services</h3>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-field" />
      </div>
      <div className="tests">
        {currentItems.map((test, index) => (
          <ServiceCard key={index} test={test} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(testData.length / itemsPerPage) }, (_, i) => (
          <button className='paginated' key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
