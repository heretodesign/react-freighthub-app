'use strict';
module.exports = {
  get: jest.fn(() => {
    return Promise.resolve({
    shipments: [
      {
        id: 'S1001',
        name: 'New spring collection(2018)',
        cargo: 'Furniture / 300 Tables/ 20',
        mode: 'sea',
        type: 'FCL',
        origin: 'Ningbo port',
        destination: 'Saarbrücker Str. 38, 10405 Berlin',
        total: '3000',
        status: 'ACTIVE'
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
    ]
    })
  })
}
