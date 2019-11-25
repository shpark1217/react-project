import React, { Component } from 'react';

class Datas extends Component {
  state = {
    num : 0
  }

  handleChange = () => {
    alert(this.state.num);
    this.setState({
      num: this.num + 1
    })
    this.props.manageCnt(this.state.num);
  }

    render() {
      return(
          <div>
              <input type="checkbox" onChange={this.handleChange}/> 
              <span>{this.props.datas.name}</span>
          </div>
      );
    }
  }

  export default Datas;