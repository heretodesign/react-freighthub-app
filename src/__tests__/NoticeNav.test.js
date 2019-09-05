import React from 'react';
import { shallow } from 'enzyme';
import NoticeNav from '../components/content/NoticeNav'
import sinon from 'sinon'


describe("NoticeNav component", () => {
  it("should render NoticeNav component and route to / when list of Shipments button is clicked", () => {
    const wrapper = shallow(<NoticeNav />);
  })
});
