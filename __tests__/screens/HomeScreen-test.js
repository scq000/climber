import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/screens/HomeScreen';

it('Home Snapshot', async () => {
  const snap = renderer.create(<Home />).toJSON();
  await expect(snap).toMatchSnapshot();
});
