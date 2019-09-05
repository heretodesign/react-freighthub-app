import React from "react";
import ReactDOM from "react-dom";
import { shallow } from 'enzyme'
import ListPage from '../pages/ListPage'
import sinon from 'sinon'


jest.mock('axios', () => {
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
      url: 'http://localhost:3000/shipments'
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
      url: 'http://localhost:3000/shipments'
    }
  ];

  return {
    get: jest.fn(() => Promise.resolve(shipments)),
  };
});


const axios = require('axios');

it('fetch a list of shipments on #componentDidMount', () => {
  const app = shallow(<ListPage />);
  app.instance().componentDidMount();
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/shipments');
});
