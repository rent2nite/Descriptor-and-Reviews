import React from 'react';
import { shallow, mount } from 'enzyme';

import Overview from '../client/src/Overview.jsx';
// import House from '../client/src/House.jsx'; 
// import Header from '../client/src/Header.jsx' 


describe('Tests for Overview Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Overview />);
    });
    test('overview component should exist', () => {
      expect(wrapper).toExist()
    });
  });

  test('Renders Header', () => {
    const wrapper = shallow(
        <Header />
    )
    expect(wrapper.find().text()).toExist();

})

test('Should render house info', () => {
    const wrapper = shallow(
        <Overview house={house}/>
    )
    expect(wrapper.find('host')).toExist();

})

test('Should render house amenities', () => {
    const wrapper = shallow(
        <House amenities={amenities}/>
    )
    expect(wrapper.find('host')).toExist();

})


