import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Text from './Text';

const ProgressBar = ({percentage, amount}) => {
  return (
    <AnimatedCircularProgress
      size={300}
      width={30}
      fill={percentage}
      rotation={270}
      backgroundColor="#d8d8d8"
      backgroundWidth={30}
      tintColor="#ff0000"
      lineCap="round">
      {() => (
        <View style={styles.container}>
          <Text style={styles.steps}>Steps</Text>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.day}>Today</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  steps: {
    color: '#FFFFFF',
    fontSize: 35,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
  },
  day: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ProgressBar;
