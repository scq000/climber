import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import App from '../App';

it('App', async () => {
  const snap = create(<App />).toJSON();
  await act(async () => {
    expect(snap).toMatchSnapshot();
  });
});
