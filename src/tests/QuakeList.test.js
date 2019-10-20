import React from 'react';
import { shallow } from 'enzyme';
import QuakeList from '../QuakeList';

beforeEach(() => {

});

afterEach(() => {
});

it('renders without crashing', () => {
  shallow(<QuakeList earthquakes={[]} />);
});

it('has a List header', () => {
  // Test that component creates a row with the headline.
});

it('creates row for each earthquake', () => {
  // Test that for each earthquake passed to QuakeList a row is created.
});
