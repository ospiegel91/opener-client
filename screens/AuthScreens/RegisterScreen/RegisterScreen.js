import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import axios from 'axios';
import validator from 'validator';

import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';

const {width, height} = Dimensions.get('screen');

class RegisterScreen extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };
  handleChangeEmail = text => {
    this.setState(() => {
      return {
        email: text,
      };
    });
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

  handleRegister = () => {
    const {email, password, username} = this.state;
    if (validator.isEmail(email) && username.trim() && password.trim()) {
      data = {
        email,
        password,
        username,
      };
      axios
        .post('http://127.0.0.1:3000/user/register', data)
        .then(response => {
          if (response.status == 201) {
            alert('new user made!');
            this.props.navigation.navigate('LoginScreen');
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          console.log('Password or username is imcompatible');
        });
    } else {
      alert('you may not pass');
    }
  };

  handleLinkToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>yadda yadda ...</Text>
        <View style={styles.formContainer}>
          <TextInput
            autoCapitalize="none"
            value={this.state.email}
            style={styles.textInput}
            placeholder="Email"
            onChangeText={this.handleChangeEmail}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.username}
            style={styles.textInput}
            placeholder="Username"
            onChangeText={this.handleChangeUsername}
          />
          <TextInput
            autoCapitalize="none"
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
          <CustomButton text="Register" onPress={this.handleRegister} />
          <View style={styles.loginRedirectContainer}>
            <TextButton
              onPress={this.handleLinkToLoginScreen}
              text="Already have an acount? Click here to sign in!"
            />
          </View>

        </View>
      </View>
    );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  formContainer: {
    height: 280,
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
  loginRedirectContainer:{
    marginTop: 6,
    height: 100,
    width: '70%',
    textAlign: 'center',
  }
});
