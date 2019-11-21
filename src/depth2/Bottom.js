import React, { Component } from 'react';
import './Bottom.css'

class Bottom extends Component {
    render() {
      return(
          <div className="bottom-bar">
              Selected: {this.props.cnt}
          </div>
      );
    }
  }

  export default Bottom;