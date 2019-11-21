import React, { Component } from 'react';

class Layout extends Component {
    render() {
      const style = {
        background:'gray',
        color:'white',
        padding:10
      }
      return(
          <div style={style}>
              <b>Measurement</b>
          </div>
      );
    }
  }

  export default Layout;