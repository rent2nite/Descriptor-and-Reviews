import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/App.jsx';


describe('Tests for App Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
    test('app component should exist', () => {
      expect(wrapper).toExist()
    });
  });






// testing for http requests (with callbacks)
// test if app is a component 
// test for the value of the properties of each revie (i.e. house.id = number, house.host = string)
//  


