import React, { Component } from 'react';
import Equipment2 from '../depth4/Equipment2'

class EquipmentWithData extends Component {
  static defaultProps = {
    equipments: [],
    datas: []
  }

  constructor(props) {
    super(props);
    this.state = {
        selectedKey: -1
    }   
    this.handleClick = this.handleClick.bind(this);
}

handleClick = (key) => {
    this.setState({
        selectedKey: this.state.selectedKey == key ? -1 : key
    });
    console.log(this.state.selectedKey);
}

    render() {
      const { equipments, datas } = this.props;
      const list = equipments.map(
        (equipments, i) => (<Equipment2 key={equipments.id} eid={equipments.eid} equipments={equipments} datas={datas} key={i} onClick={() => this.handleClick(i)} 
        isSelectedKey={this.state.selectedKey != -1} manageCnt={this.props.manageCnt}/>)
      );
      return(
          <div>
            <div>{list}</div>
          </div>
      );
    }
  }

  export default EquipmentWithData;