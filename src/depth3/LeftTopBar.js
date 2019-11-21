import React, { Component } from 'react';
import './LeftTopBar.css';

class LeftTopBar extends Component {
    render() {
      return(
          <div className="top-left-bar">
              <div>Equipment</div>
              <div>Date</div>
              <div>FileSize</div>
          </div>
      );
    }
  }

  export default LeftTopBar;