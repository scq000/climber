import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

const SubmitButton = ({onSubmit, disabled}) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <View style={[styles.button, {opacity: disabled ? 0.5 : 1}]}>
        <Image source={require('../assets/btn/bg.png')} style={styles.image} />
        <View style={styles.absoluteView}>
          <Text style={styles.text}>LOGIN</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 312,
    height: 39.19,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 23.5,
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    borderRadius: 19,
  },
});

export default SubmitButton;
