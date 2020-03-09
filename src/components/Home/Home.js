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
  handleClick = (event) => {
    this.props.history.push('/Details');
    console.log(this.props.reduxState.movies);
    this.props.dispatch({
      type: 'USE_ID',
      payload: event.target.id
    })
    this.props.dispatch({
      type: 
    })
  console.log(event.target.id);
  }

  render() {
    return (
      <div className="Home">
        {this.props.reduxState.movies.map(movie => <div key={movie.id} ><img src={movie.poster} 
          onClick={this.handleClick} id={movie.id}/>{movie.title}{movie.description}</div>)}
      </div>

    );
  }
}
// Redux is set up
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);