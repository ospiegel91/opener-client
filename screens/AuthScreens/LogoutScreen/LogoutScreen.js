import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';

import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';

const {width, height} = Dimensions.get('screen');

class LogoutScreen extends Component {
  state = {};
  handleLogout = () => {
    AsyncStorage.removeItem('x-auth')
      .then(() => {
        this.props.navigation.navigate('HomeScreen');
      })
      .catch(err => {
        alert(err);
      });
  };

  handleLinkToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  handleLinkToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>yadda yadda ...</Text>
        <CustomButton text="Logout" onPress={this.handleLogout} />
        <TextButton
          onPress={this.handleLinkToHomeScreen}
          text="actually... take me back home"
        />
      </View>
    );
  }
}

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  formContainer: {
    height: 200,
    justifyContent: 'space-around',
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: '35%',
    marginBottom: '25%',
    fontFamily: 'Gaegu',
  },
  textInput: {
    width: 0.9 * width,
    height: 0.08 * height,
    backgroundColor: 'rgb(242,242,242)',
    borderRadius: 30,
    paddingLeft: '3%',
    color: 'rgb(188,188,188)',
    fontSize: 18,
  },
});
