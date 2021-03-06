import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount() {
        this.getGenres();
       
    }// end componentDidMount

    getGenres = () => {
        this.props.dispatch({
            type: 'GET_GENRES',
            payload: this.props.reduxState.useId
        })
        this.props.dispatch({
            type: 'SINGLE_MOVIE',
            payload: this.props.reduxState.useId
        })
    }// getGenres is used to get the specific genres and the movie information for a single movie. 

    // Changes the route back to home
    returnHome = () => {
        this.props.history.push('/')
    }// end Return Home

    // Sends the page to Edit
    goToEdit = () => {
        this.props.history.push('/Edit')
    }// end goToEdit



    render() {
        return (
            <div className="Details">
                <button onClick={this.returnHome}>Back To List</button>
                <button onClick={this.goToEdit}>Edit</button>
                {this.props.reduxState.single.map(movie => <div>{movie.title} <br/><br/>{movie.description}<br/></div>)}
                {this.props.reduxState.genres.map(genre => <li>{genre.name}</li>)}
            </div>

        );
    }
}
// Set up redux
const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Details);