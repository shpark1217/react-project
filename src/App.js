import React, { Component } from 'react';
import Layout from './depth1/Layout'

class App extends Component {
  state = {
    equipments: [
      {
        "id":0,
        "name": "장비01",
        "eid": "01"
      },
      {
        "id":1,
        "name": "장비02",
        "eid": "02"
      },
      {
        "id":2,
        "name": "장비03",
        "eid": "03"
      },
      {
        "id":3,
        "name": "장비04",
        "eid": "04"
      },
      {
        "id":4,
        "name": "장비05",
        "eid": "05"
      }
    ],
    datas:[
      {
        "id":0,
        "name": "2019-11-03-01.dat",
        "eid": "01"
      },
      {
        "id":1,
        "name": "2019-11-03-02.dat",
        "eid": "01"
      },
      {
        "id":2,
        "name": "2019-11-03-03.dat",
        "eid": "03"
      },
      {
        "id":3,
        "name": "2019-11-03-04.dat",
        "eid": "04"
      },
      {
        "id":4,
        "name": "2019-11-04-01.dat",
        "eid": "02"
      },
      {
        "id":5,
        "name": "2019-11-04-02.dat",
        "eid": "02"
      },
      {
        "id":6,
        "name": "2019-11-11-01.dat",
        "eid": "03"
      },
      {
        "id":7,
        "name": "2019-11-11-02.dat",
        "eid": "03"
      },
      {
        "id":8,
        "name": "2019-11-19-01.dat",
        "eid": "04"
      },
      {
        "id":9,
        "name": "2019-11-19-02.dat",
        "eid": "04"
      }
    ]
  }

  render() {
    return(
      <React.Fragment>
        <Layout data={this.state} equipCheck={this.equipCheck}/>
      </React.Fragment>
    );
  }
}

export default App;
