import React, { Component } from 'react';
import Datas from '../depth5/Datas'

class Equipment2 extends Component {
    static defaultProps = {
        equipments: [],
        datas: []
    }
    render() {
        const blank = '';
        const {
            name, eid, id
          } = this.props.equipments;
          const { equipments, datas } = this.props;
          const result = datas.filter(data => data.eid == eid);
          const list = result.map(
            datas => (<Datas key={equipments.id} datas={datas} onClick={this.props.manageCnt}/>)
          );
      return(
        <div>
          <div onClick={this.props.onClick}><b>{name}</b></div>
          <div> {this.props.isSelectedKey ? list : blank}</div>
        </div>
      );
    }
  }

  export default Equipment2;