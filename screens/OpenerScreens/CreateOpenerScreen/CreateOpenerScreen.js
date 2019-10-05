import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from 'react-native';

import axios from 'axios';

import WideButton from '../Components/WideButton/WideButton';

const {width, height} = Dimensions.get('screen');

class CreateOpenerScreen extends Component {
  state = {
    alias: '',
    genere: '',
    content: '',
  };
  handleChangeAlias = text => {
    this.setState(() => {
      return {
        alias: text,
      };
    });
  };

  handleChangeGenere = text => {
    this.setState(() => {
      return {
        genere: text,
      };
    });
  };

  handleChangeContent = text => {
    this.setState(() => {
      return {
        content: text,
      };
    });
  };

  handleSubmit = () => {
    const {alias, genere, content} = this.state;
    if (genere.trim() && content.trim()) {
      data = {
        alias,
        genere,
        content,
      };
      axios
        .post('http://127.0.0.1:3000/opener/create', data)
        .then(response => {
          if (response.status == 201) {
            alert('new message made!');
            this.props.navigation.navigate('HomeScreen');
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          console.log('cannot be left blank');
        });
    } else {
      alert('you may not pass');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}></Image>
        <View style={styles.formContainer}>
          <TextInput
            autoCapitalize="none"
            value={this.state.alias}
            style={styles.textInput}
            placeholder="alias"
            onChangeText={this.handleChangeAlias}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.genere}
            style={styles.textInput}
            placeholder="genere"
            onChangeText={this.handleChangeGenere}
          />
          <TextInput
            autoCapitalize="none"
            value={this.state.content}
            style={styles.contentInput}
            placeholder="Message Content"
            onChangeText={this.handleChangeContent}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 150,
            justifyContent: 'space-around',
          }}>
          <WideButton text="Share!" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

export default CreateOpenerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formContainer: {
    height: 400,
    justifyContent: 'space-around',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: '22%',
    marginBottom: '8%',
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
  contentInput: {
    width: 0.9 * width,
    height: 0.25 * height,
    backgroundColor: 'rgb(242,242,242)',
    borderRadius: 30,
    paddingLeft: '3%',
    color: 'rgb(188,188,188)',
    fontSize: 18,
  },
});