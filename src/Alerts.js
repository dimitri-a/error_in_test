import React, { Component } from "react";
import {sortAlerts} from './utility'

class Alerts extends Component {
    render() {  
        const {people} = this.props

       // console.log(sortAlerts(people.alerts,people.applicants))
        
      return (
        <div>
         {sortAlerts(people.alerts,people.applicants).map(p =><div>{p.name}{' '}{p.subject}</div>)}
        </div>
      );
    }
  }
  
  export default Alerts;