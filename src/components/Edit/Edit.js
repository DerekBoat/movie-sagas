import React, { Component } from 'react';
import {connect} from 'react-redux';

class Edit extends Component {

    state = {
        movieTitle: '',
        movieDescription: '',
        movieId: this.props.reduxState.useId
    }

    goBack = () => {
        this.props.history.push('/Details');
    }

    saveChanges = () => {
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: this.state
        })
        this.props.history.push('/Details');
    } // saveChanges is the dispatch that sends through axios to the database a new set of information

    handleChangeTitle = (event) => {
        this.setState({
            ...this.state,
            movieTitle: event.target.value
        })
    } //end handleChangeTitle used to store the new title

    handleChangeDescription = (event) => {
        this.setState({
            ...this.state,
            movieDescription: event.target.value
        })
    } // end handleChangeDescription used to store the new description

  render() {  
    return (
      <div className="Edit">
          <button onClick={this.goBack}>Cancel</button>
          <button onClick={this.saveChanges}>Save</button>
          <br/>
          <input onChange={this.handleChangeTitle}></input>
          <br/>
          <textarea onChange={this.handleChangeDescription}></textarea>
      </div>
     
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Edit);