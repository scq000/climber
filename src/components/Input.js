import React from 'react';
import {View, Animated, TextInput, StyleSheet} from 'react-native';

const DURATION_TIME = 150;
const FOCUS_VALUE = 1;
const BLUR_VALUE = 0;

const Input = ({label, keyboardType, onChangeText, value = '', ...rest}) => {
  const [isActive, setIsActive] = React.useState(false);

  const positionAnim = React.useRef(
    new Animated.Value(value ? FOCUS_VALUE : BLUR_VALUE),
  ).current;

  const _onFocus = () => {
    if (!isActive) {
      setIsActive(true);
      Animated.timing(positionAnim, {
        toValue: FOCUS_VALUE,
        duration: DURATION_TIME,
        useNativeDriver: false,
      }).start();
    }
  };

  const _onBlur = () => {
    if (isActive && !value) {
      setIsActive(false);
      Animated.timing(positionAnim, {
        toValue: BLUR_VALUE,
        duration: DURATION_TIME,
        useNativeDriver: false,
      }).start();
    }
  };

  const _getAnimatedTitleStyles = () => {
    const titleActiveSize = 12;
    const titleInActiveSize = 16;

    return {
      top: positionAnim.interpolate({
        inputRange: [0, 0.75],
        outputRange: [14, 0],
      }),
      fontSize: isActive ? titleActiveSize : titleInActiveSize,
    };
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, _getAnimatedTitleStyles()]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        underlineColorAndroid="transparent"
        onFocus={_onFocus}
        onBlur={_onBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...rest}
        style={[styles.textInput, rest.style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: '#7b7b7b',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    marginVertical: 5,
  },
  title: {
    position: 'absolute',
    left: 4,
    color: '#7b7b7b',
  },
  textInput: {
    fontFamily: 'Helvetica',
    color: '#fff',
    paddingBottom: 0,
  },
});

export default Input;
