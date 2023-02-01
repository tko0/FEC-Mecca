import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sub_RatingsReviews/styles/ratings.css';
import ReviewList from './Sub_RatingsReviews/ReviewList.jsx';
import Dashboard from './Sub_RatingsReviews/Dashboard.jsx';

export default function RatingsReviews({ productID, reviewMetadata }) {
  const [sort, setSort] = useState('relevant');
  const [selectedRatings, setSelectedRatings] = useState({
    1: false,
    2: false,
    3: true,
    4: true,
    5: false,
  });

  const [reviews, setReviews] = useState(null);

  const updateData = () => {
    const url = `/api/reviews/?product_id=${productID}&sort=${sort}&count=50`;
    axios.get(url)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => console.log(err));
  };

  // listens for sorting select-box change
  useEffect(() => {
    updateData();
  }, [sort]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const toggleSelectedRating = (starAmt) => {
    setSelectedRatings({
      ...selectedRatings,
      [starAmt]: !selectedRatings[starAmt],
    });
  };

  return (
    <div className="ratings-reviews">
      <h3>Ratings & Reviews</h3>
      {reviews && reviewMetadata
      && (
      <Dashboard
        selectedRatings={selectedRatings}
        toggleSelectedRating={toggleSelectedRating}
        setSelectedRatings={setSelectedRatings}
        reviewMetadata={reviewMetadata}
        reviews={reviews}
      />
      )}
      {reviews
      && reviewMetadata
      && (
      <ReviewList
        selectedRatings={selectedRatings}
        sort={sort}
        onChange={handleSortChange}
        reviews={reviews}
        update={updateData}
      />
      )}
    </div>
  );
}
