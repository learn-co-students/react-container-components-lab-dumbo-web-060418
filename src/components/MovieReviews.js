// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  let reviews = props.reviews
  return <div className="review-list">{reviews.map(review => {
    return <div key={review.display_title} className="review">
      <h3>{review.display_title}</h3>
      <ul>
        <li>{review.headline}</li>
        <li>{review.summary_short}</li>
      </ul>
    </div>
  })
}</div>
}


export default MovieReviews;
