import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

jest.mock('axios');
beforeEach(() => {
});

afterEach(() => {
});

it('renders without crashing', () => {
  shallow(<Map earthquakes={[]} />);
});

it('renders a google maps component', () => {
  // Test that a google maps component is created
});

describe('red cirlce', () => {
  it('creates a red circle for each earthquake', () => {
    // Test that for each earthquake passed to Map a RedCircle component is created.
  });

  it('has correct radius assigned', () => {
    // Test that each earthquake indicator has the correct radius assigned
  });
});
