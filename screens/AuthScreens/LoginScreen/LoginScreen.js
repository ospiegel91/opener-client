import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';

import axios from 'axios';

const {width, height} = Dimensions.get('screen');

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
  };
  handleChangeUsername = text => {
    this.setState(() => {
      return {
        username: text,
      };
    });
  };

  handleChangePassword = text => {
    this.setState(() => {
      return {
        password: text,
      };
    });
  };

  handleLogin = () => {
    const {password, username} = this.state;
    if (username && password) {
      data = {
        password,
        username,
      };
      axios
        .post('http://127.0.0.1:3000/user/login', data)
        .then(response => {
          if (response.status == 201) {
            try {
              const token = response.headers['x-auth'];
              const userId = response.headers['user-id'];
              if (token) {
                AsyncStorage.setItem('user-id', userId);
                AsyncStorage.setItem('x-auth', token)
                  .then(() => {
                    this.props.navigation.navigate('HomeScreen');
                  })
                  .catch(err => {
                    alert(err);
                  });
              }
            } catch (err) {
              alert(err);
            }
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      alert('Username and Password are both required!');
    }
  };

  handleLinkToRegisterScreen = () => {
    alert('hello from handle link');
    this.props.navigation.navigate('RegisterScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>yadda yadda ...</Text>
        <View style={styles.formContainer}>
          <TextInput
            value={this.state.username}
            style={styles.textInput}
            placeholder="Username"
            onChangeText={this.handleChangeUsername}
          />
          <TextInput
            value={this.state.password}
            style={styles.textInput}
            placeholder="Password"
            onChangeText={this.handleChangePassword}
            secureTextEntry
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 150,
            justifyContent: 'space-around',
          }}>
          <CustomButton onPress={this.handleLogin} text="Login" />
          <TextButton
            onPress={this.handleLinkToRegisterScreen}
            text="Dont have an account? Register!"
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  formContainer: {
    height: 150,
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
    fontSize: 22,
    fontFamily: 'Gaegu',
  },
});
