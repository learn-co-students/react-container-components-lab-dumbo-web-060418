import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const NYT_SEARCH_KEY = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: 'dog',
    reviews: []
  }

  componentDidMount() {
    this.executeSearch()
  }

  executeSearch() {
    fetch(SEARCH_URL + this.state.searchTerm + NYT_SEARCH_KEY)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ reviews: json.results })
      })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.executeSearch()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
