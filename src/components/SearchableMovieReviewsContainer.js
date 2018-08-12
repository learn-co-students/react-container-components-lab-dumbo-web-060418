import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'e20b6a2ada60466da2504593cc4a92ab';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
const searchURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    let searchTerm = this.state.searchTerm
    fetch(`${searchURL}${searchTerm}&api-key=${NYT_API_KEY}`)
    .then(res => res.json()).then(res => this.setState({reviews: res.results}))
  }


  render(){
    return(<div className="searchable-movie-reviews">
      <form onSubmit={this.handleSearch}> Search Reviews:
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>

      <div><MovieReviews reviews={this.state.reviews} /></div>
     </div>)
  }


}
