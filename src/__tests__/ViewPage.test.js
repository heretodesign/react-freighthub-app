import React from "react";
import { shallow, mount } from 'enzyme'
import ViewPage from '../pages/ViewPage'
import sinon from 'sinon'


describe('ViewPage Component', () => {
  describe('when provided with an array of shipments', () => {
    it('should render 1 shipment item based on props.shipments', () => {
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


// it('simulates Link route when button Click', () => {
//   const buttonClick = sinon.spy();
//   const wrapper = shallow(<NoticeNav buttonClick={buttonClick} />);
//   wrapper.find('Link').simulate('click');
//   expect(buttonClick).to.have.property('callCount', 1);
// })


// describe('ViewPage Component', () => {
//   it('should call props.addName when button is clicked', () => {
//     const content = [
//            {
//              id: 'S1001',
//              name: 'New spring collection(2018)',
//              cargo: 'Furniture / 300 Tables/ 20',
//              mode: 'sea',
//              type: 'FCL',
//              origin: 'Ningbo port',
//              destination: 'Saarbrücker Str. 38, 10405 Berlin',
//              total: '3000',
//              status: 'ACTIVE',
//            }
//          ];
//     const mockFunction = jest.fn() // In-built Jest function mocker
//     const component = mount(<ViewPage content={content} onClick={mockFunction} />)
//
//     // Test before event
//     expect(mockFunction).not.toHaveBeenCalled()
//
//     // simulate the click event
//     component.find('button').simulate('click')
//
//     // Test after event
//     expect(mockFunction).toHaveBeenCalled()
//   })
// })
