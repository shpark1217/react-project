import React, { Component } from 'react';
import './RightTopBar.css';
import Equipments from '../depth3/Equipments';
import Date from '../depth3/Date';
import FileSize from '../depth3/FileSize';

class RightTopBar extends Component {
    render() {
      return(
          <div className="top-right-bar">
              <div><Equipments data={this.props.data}/></div>
              <div><Date/></div>
              <div><FileSize/></div>
          </div>
      );
    }
  }

  export default RightTopBar;