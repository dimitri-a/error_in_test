import React from 'react';
import { shallow } from 'enzyme';
import AlertsComp from './Alerts';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";

let dateNowSpy;

describe('Alerts', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });


  it('should render pagination', () => {
    const wrapper = shallow(<AlertsComp people={peopleMock} />)
    expect(wrapper).toMatchSnapshot();
  });

});


const peopleMock = {
  "alerts": [
    {
      "submissionId": "SUB200620150004197",    
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001297"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81297"
    },

    {
     
      "submissionId": "SUB200620150004201",
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001201"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81201"
    },
    {
     
      "submissionId": "SUB200620150004202",
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001202"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81202"
    },
    {
     
      "submissionId": "SUB200620150004203",
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001202"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81203"
    },
    {
     
      "submissionId": "SUB200620150004204",
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001204","000001202"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81204"
    },
    {
     
      "submissionId": "SUB200620150004205",
      "createdDateTime": "2018-10-24T09:25:00Z",
      "assignedDateTime": "2018-10-25T09:25:00Z",
      "dueDateTime": "2018-10-25T09:25:00Z",
      "applicants": ["000001297"],
      "id": "19d0da63-dfd0-4c00-a13a-cc822fc81205"
    }
  ]
  ,


  applicants:
    [
      {
        firstName: 'Ron',
        lastName: 'Sharma',
        idScheme: 'CustomerInternalId',
        isPrimaryApplicant: true,
        applicantSerialNumber: 1,
        id: '000001297',
      },
      {
        firstName: 'JAMESON',
        lastName: 'Last',
        idScheme: 'CustomerInternalId',
        isPrimaryApplicant: false,
        applicantSerialNumber: 2,
        id: '000001204',
      },
      {
        firstName: 'Jack',
        lastName: 'Pagoda',
        idScheme: 'CustomerInternalId',
        isPrimaryApplicant: false,
        applicantSerialNumber: 3,
        id: '000001202',
      },
      {
        firstName: 'Margot',
        lastName: 'Pagoda',
        idScheme: 'CustomerInternalId',
        isPrimaryApplicant: false,
        applicantSerialNumber: 3,
        id: '000001201',
      },
    ]
}
