import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

class HomeScreen extends Component {
  state = {
      
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home screen!</Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
