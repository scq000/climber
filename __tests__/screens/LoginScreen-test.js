import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../src/screens/LoginScreen';

it('Login Snapshot', () => {
  const snap = renderer.create(<Login />).toJSON();
  expect(snap).toMatchSnapshot();
});
