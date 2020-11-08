import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import Input from '../../src/components/Input';

describe('Input', () => {
  it('should render correctly', function () {
    const snap = create(<Input />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('should render with label correctly', function () {
    const snap = create(<Input label="test-label" />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});