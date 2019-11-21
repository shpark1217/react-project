import React, { Component } from 'react';

class Datas extends Component {
    render() {
      return(
          <div>
              <input type="checkbox" checked={this.props.manageCnt}/> 
              <span>{this.props.datas.name}</span>
          </div>
      );
    }
  }

  export default Datas;