import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
componentDidMount(){
    this.getMovies();
}
getMovies(){
  this.props.dispatch({ type: 'GET_MOVIES'})
}
    
  render() {  
    return (
      <div className="Home">
        {/* {JSON.stringify(this.props.reduxState.movies)} */}
        {this.props.reduxState.movies.map(movie=><div key={movie.id}>{movie.title}</div>)}
        <br/>
        <br/>
        {/* <div>{this.props.reduxState.searchReducer.data.map(gif=><li key={gif.id}><img alt={gif.url} src={gif.images.original.url} height='100px' /><button className='favoriteButton' name={gif.images.original.url} onClick={this.favoriteButton}>Add to Favs</button></li> )}</div>} */}

      </div>
     
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);