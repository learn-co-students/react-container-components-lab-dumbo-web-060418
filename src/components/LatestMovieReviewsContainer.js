import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e20b6a2ada60466da2504593cc4a92ab';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  state = {reviews: []}

  render(){
    return(<div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
    </div>)
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then(res => this.setState({reviews: res.results}))
  }

}
