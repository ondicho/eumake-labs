import React from 'react';
import Card from './Card'; // Import the Card component
import '../../assets/css/track.css';
import search from '../../assets/images/search.png'
import banner from '../../assets/images/track-test.jpg'

const TrackTest = () => {


    return (
        <div className="main-container track-test">
            <div className="tracker-banner">
                <img src={banner} alt='tracker-banner' className='banner' />
            </div>
            <div className="tracker-body">
                <h2>Track Your Test</h2>
                <div className="tracker">
                    <input
                        type="text"
                        placeholder="Search for services..."
                        value=''
                        onChange=''
                        className='search'
                    />
                    <button className='search-button' onClick=''>
                        <img src={search} alt="Search" className="search-icon" />
                    </button>
                </div>
                <h3>This feature will be launched soon. Hang in there!</h3>
            </div>
        </div>
    );
};

export default TrackTest;
