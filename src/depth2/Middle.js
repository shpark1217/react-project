import React, { Component } from 'react';
import './Middle.css'
import EquipmentWithData from '../depth3/EquipmentWithData'

class Middle extends Component {
    render() {
      return(
          <div className="middle-bar">
              <EquipmentWithData equipments={this.props.data.equipments} datas={this.props.data.datas} onClick={this.props.manageCnt}/>
          </div>
      );
    }
  }

  export default Middle;