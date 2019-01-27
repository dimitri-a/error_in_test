export  const persons = {
  "applicants": [
    {
      "firstName": "Sarah",
      "lastName": "Bollins",
      "idScheme": "CustomerInternalId",
      "isPrimaryApplicant": false,
      "applicantSerialNumber": 1,
      "id": "000001262"
    },
    {
      "firstName": "Mark",
      "lastName": "Smith",
      "idScheme": "CustomerInternalId",
      "isPrimaryApplicant": true,
      "applicantSerialNumber": 1,
      "id": "000001263"
    },
    {
      "firstName": "Ted",
      "lastName": "Jason",
      "idScheme": "CustomerInternalId",
      "isPrimaryApplicant": true,
      "applicantSerialNumber": 1,
      "id": "000001201"
    },
 
  ],

  "alerts": [
    {
      "subject": "What a nice day",
      "submissionId": "SUB200620150004197",
      "createdDateTime": "2020-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2020-10-25T09:25:00Z",
      "applicants": ["000001262","000001263"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81297"
    },

    {
  
      "subject": "Hello",
      "submissionId": "SUB200620150004201",
        "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001201"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81201"
    },
 
  ]
}