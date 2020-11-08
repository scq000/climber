import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const LoginScreen = ({navigation}) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isValidate = !!(username && password);

  const onSubmit = () => {
    if (username && password) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/background/bg.png')}
        style={styles.container}>
        <View style={styles.form}>
          <Input
            label="Username"
            onChangeText={setUserName}
            style={styles.input}
            value={username}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Input
            label="Password"
            secureTextEntry
            onChangeText={setPassword}
            style={styles.input}
            value={password}
          />
          <SubmitButton onSubmit={onSubmit} disabled={!isValidate} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    resizeMode: 'cover',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 100,
  },
  input: {
    width: '100%',
  },
});

export default LoginScreen;
