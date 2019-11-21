import React, { Component } from 'react';
import Equipment from '../depth4/Equipment'

class Equipments extends Component {
  static defaultProps = {
    data: []
  }
    render() {
      const { data } = this.props;
      const list = data.map(
        equipments => (<Equipment key={equipments.id} equipments={equipments}/>)
      );
      return(
          <div>
            {list}
          </div>
      );
    }
  }

  export default Equipments;