import React, { Component } from "react";
import {sortAlerts, createAlertsWithName} from './utility'

class Alerts extends Component {
    render() {  
        const {people} = this.props

       //console.log('createAlertsWithName chopped=',createAlertsWithName(people.alerts,people.applicants))
        
      return (
        <div>
         {sortAlerts(people.alerts,people.applicants).map(p =><div>{p.name}{' '}{p.subject}</div>)}
        </div>
      
      );
    }
  }
  
  export default Alerts;