import React from 'react';
import 'react-native';
import {create} from 'react-test-renderer';
import SubmitButton from '../../src/components/SubmitButton';

describe('SubmitButton', () => {
  const fn = jest.fn();

  it('should render correctly', function () {
    const snap = create(<SubmitButton onSubmit={fn} />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('should render disabled button correctly', function () {
    const snap = create(<SubmitButton onSubmit={fn} disabled />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
