import React, { Component } from 'react';

class Equipment extends Component {
    static defaultProps = {
        equipments: [
            {
              id:0,
              name: 'Equipment01',
              eid: '01'
            }
          ]
    }
    render() {
        const {
            name, eid, id
          } = this.props.equipments;
      return(
          <span> 
               <input type="checkbox"/> 
              <span>{name}</span>
          </span>
      );
    }
  }

  export default Equipment;