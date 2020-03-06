import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.getMovies();
  }// end componentDidMount

  // Sends a signal to the saga listener to send the get request to the database
  getMovies = () => {
    this.props.dispatch({ type: 'GET_MOVIES' })
  }// end getMovies

  // When an image is clicked the route is sent to details
  handleClick = () => {
    this.props.history.push('/Details')
  }// end handleClick

  render() {
    return (
      <div className="Home">
        {this.props.reduxState.movies.map(movie => <div key={movie.id}><img src={movie.poster} 
          onClick={this.handleClick} />{movie.title}{movie.description}</div>)}
      </div>

    );
  }
}
// Redux is set up
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);