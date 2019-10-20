import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from '../App';
import Map from '../Map';
import QuakeList from '../QuakeList';
import dailyFeed from './mocks/dailyFeed';

describe('<App/>', () => {
  let wrapper;
  beforeEach(async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: dailyFeed,
      status: 200,
    }));

    // async version of act as useEffect will otherwise update the state outside of the act context
    await act(async () => {
      wrapper = mount(<App />);
    });
  });

  afterEach(() => {
    axios.get.mockClear();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('calls api request once', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  describe('map and list component', () => {
    it('renders both', () => {
      expect(wrapper.find(Map).exists()).toBeTruthy();
      expect(wrapper.find(QuakeList).exists()).toBeTruthy();
    });

    it('passes earthquakes to subcomponents', () => {
    // Test that earthquakes are passed as props
    });
  });
});
