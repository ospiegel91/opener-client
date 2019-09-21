import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../Components/Header/Header';

class CreateOpenerScreen extends Component {
  state = {}
  handleLeftHeaderIcon = () => {
    return alert('already logged in - should direct to log out')
  };

  handleRightHeaderIcon = () =>{
    return this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header handleRightIcon={this.handleRightHeaderIcon} handleLeftIcon={this.handleLeftHeaderIcon} topRightButton="home"/>
        <Text>create opener screen</Text>
      </View>
    );
  }
}

export default CreateOpenerScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesContainer:{
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
});
