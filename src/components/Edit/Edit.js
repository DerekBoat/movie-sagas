import React, { Component } from 'react';
import {connect} from 'react-redux';

class Edit extends Component {


  render() {  
    return (
      <div className="Edit">
          <button>Cancel</button>
          <button>Save</button>
          <br/>
          <input></input>
          <br/>
          <textarea></textarea>

      </div>
     
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Edit);