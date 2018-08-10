import React from 'react'

const MovieReviews = (props) => {

  const mappedReviews = props.reviews.map( review => {
    return (
      <div key={review.display_title} className='review'>
        <h3>{review.headline}</h3>
        <h5>{review.byline}</h5>
        <p>{review.summary_short}</p>
      </div>
    )
  })

  return <div className='review-list'>
    {mappedReviews}
  </div>
}

export default MovieReviews
