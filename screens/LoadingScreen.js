import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    AsyncStorage.getItem('x-auth').then(token => {
      axios
        .get('http://127.0.0.1:3000/private/private', {
          headers: {
            'x-auth': token,
          },
        })
        .then(reponse => {
          if (reponse.status == 200) {
            this.props.navigation.navigate('HomeScreen');
          } else {
            this.props.navigation.navigate('LoginScreen');
          }
        })
        .catch(() => {
          this.props.navigation.navigate('LoginScreen');
        });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
