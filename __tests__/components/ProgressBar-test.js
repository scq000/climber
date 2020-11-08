import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import ProgressBar from '../../src/components/ProgressBar';

describe('ProgressBar', () => {
  it('should render correctly', function () {
    const snap = create(<ProgressBar percentage={10} amount={123} />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
