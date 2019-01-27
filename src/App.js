import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import Alerts from './Alerts'
import {persons} from  './persons.js'


class App extends Component {

  render() {
    //console.log(this.getApplicantByid('16671520039'))
    //console.log(this.go());
    return (
      <div className="App"> date descending, if dates equal by name ascending
       <Alerts people={persons}/>
      </div>
    );
  }
}

export default App;