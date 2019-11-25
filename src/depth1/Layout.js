import React, { Component } from 'react';
import Header from '../depth2/Header'
import Top from '../depth2/Top'
import Bottom from '../depth2/Bottom'
import Middle from '../depth2/Middle'
import './Layout.css';

class Layout extends Component{
  state = {
    cnt:0
  }
  
  manageCnt = (num) => {
    alert(this.state.cnt + ' / ' + num);
    this.setState({
      cnt: num
    });
  }
    render() {
    return (
    <div className="layout">
          <Header/>
          <Top data={this.props.data.equipments} />
          <Middle data={this.props.data} manageCnt={() => this.manageCnt}/>
          <Bottom cnt={this.state.cnt}/>
    </div>
    );
  }
}
  export default Layout;