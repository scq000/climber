import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import ProgressBar from '../components/ProgressBar';

const INIT_AMOUNT = 12000;
const CURRENT_AMOUNT = 14000;
const DURATION_TIME = 400;
const TOTAL_AMOUNT = 35000;

const HomeScreen = () => {
  const [amount, setAmount] = React.useState(INIT_AMOUNT);

  React.useEffect(() => {
    setTimeout(() => {
      setAmount(CURRENT_AMOUNT);
    }, DURATION_TIME);
  });

  return (
    <View style={styles.screen}>
      <ImageBackground
        blurRadius={30}
        source={require('../assets/background/bg.png')}
        style={styles.container}>
        <View style={styles.userinfo}>
          <Image
            styles={styles.avatar}
            source={require('../assets/avatar.png')}
          />
          <Text style={styles.username}>Climber</Text>
        </View>
        <View style={styles.progressbar}>
          <ProgressBar
            percentage={(amount / TOTAL_AMOUNT) * 100}
            amount={amount}
          />
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
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
  userinfo: {
    marginLeft: 26,
    marginTop: 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 76,
    borderRadius: 76,
  },
  username: {
    flex: 1,
    fontSize: 30,
    marginLeft: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  progressbar: {
    marginTop: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
