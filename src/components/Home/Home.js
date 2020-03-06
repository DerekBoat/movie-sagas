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
        {JSON.stringify(this.props.reduxState.movies)}
        <br/>
        <br/>
      </div>
     
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);