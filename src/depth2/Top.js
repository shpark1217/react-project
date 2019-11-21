import React, { Component } from 'react';
import './Top.css';
import LeftTopBar from '../depth3/LeftTopBar'
import RightTopBar from '../depth3/RightTopBar'

class Top extends Component {
  
    render() {
      return(
          <div className="top-bar">
              <LeftTopBar/>
              <RightTopBar data={this.props.data}/>
          </div>
      );
    }
  }

  export default Top;