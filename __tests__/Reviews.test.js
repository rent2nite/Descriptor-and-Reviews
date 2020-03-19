import React from 'react';
import { shallow, mount } from 'enzyme';

import Reviews from '../client/src/Reviews.jsx';


describe('Tests for Reviews Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Reviews />);
    });
    test('Review component should exist', () => {
      expect(wrapper).toExist()
    });
  });


  test('Should render individual Review', () => {
    const wrapper = shallow(
        <ReviewsEntry review = {review} />
    )
    expect(wrapper.find('review')).toExist();

})