import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

const Text = (props) => (
  <NativeText {...props} style={[styles.text, props.style]} />
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
  },
});

export default Text;
