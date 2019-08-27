import React from "react";
import { shallow } from 'enzyme'
import ViewPage from '../pages/ViewPage'

describe('ViewPage Component', () => {
  describe('when provided with an array of shipments', () => {
    it('contains a matching number of <p> elements', () => {
      const shipments = [
        {
          id: 'S1001',
          name: 'New spring collection(2018)',
          cargo: 'Furniture / 300 Tables/ 20',
          mode: 'sea',
          type: 'FCL',
          origin: 'Ningbo port',
          destination: 'Saarbrücker Str. 38, 10405 Berlin',
          total: '3000',
          status: 'ACTIVE',
        },
        {
          id: 'S1002',
          name: 'This is Abel',
          cargo: 'Bikes model 27X / 100 Bikes model 27X/ 100',
          mode: 'air',
          type: 'LCL',
          origin: 'Shanghai Port',
          destination: 'Saarbrücker Str. 38, 10405 Berlin',
          total: '10000',
          status: 'COMPLETED',
        }
      ];
      const viewPageInstance = shallow(
        <ViewPage shipments={shipments}/>
      );
      viewPageInstance.find('Content').forEach(contentInstance => {
       const contentProps = contentInstance.props();
       const matchingContent = shipments.find(content => content.id === contentProps.id);
       expect(contentProps.name).toBe(matchingContent.name);
     })
    })
  });
});
