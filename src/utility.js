import _ from 'lodash';

export const createAlertsWithName = (alerts,applicants) =>{
    return alerts.map(a =>({
      ...a,
      name:(a.applicants
        .map(id =>getApplicantByid(id,applicants))
        .find(applicant => applicant.isPrimaryApplicant) ||{lastName:''}).lastName
    }))
  }

  export const getApplicantByid = (id,applicants) =>{
    return _.find(applicants,{id})
  }

  export const  sortAlerts  = (alerts,applicants) => {
    return createAlertsWithName(alerts,applicants).sort(function(a, b) {
      debugger
      var adate = new Date(a.createdDateTime),
          bdate = new Date(b.createdDateTime),
          rv = bdate - adate;
      if (rv === 0) {
          rv = a.name.localeCompare(b.name);
      }
      return rv;
  });
  }