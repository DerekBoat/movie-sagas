import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

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
            </div>

        );
    }
}
// Set up redux
const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Details);