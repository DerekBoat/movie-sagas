import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {

  render() {  
    return (
      <div className="Details">
        
      </div>
     
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Details);