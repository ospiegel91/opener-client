import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextButton from '../Components/TextButton/TextButton';

class WelcomeScreen extends Component {
  componentDidMount() {
  }

  handleLinkToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };


  render() {
    return (
      <View style={styles.container}>
        <TextButton
          onPress={this.handleLinkToHomeScreen}
          text="Continue to the app!"
        />
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
