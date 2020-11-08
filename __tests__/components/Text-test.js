import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../src/components/Text';

describe('Text', () => {
  it('should render empty text correctly', () => {
    const snap = renderer.create(<Text />).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('should render not empty text correctly', () => {
    const snap = renderer.create(<Text>test</Text>).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
