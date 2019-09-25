import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import CustomButton from '../Button/Button';
import axios from 'axios';

class Shuffler extends Component {
  state = {
    activeCard: 0,
  };

  pressNext = () => {
    let deck = this.props.deck;
    let {activeCard} = this.state;
    if (deck.length - 1 > activeCard) {
      this.setState(() => {
        return {
          activeCard: this.state.activeCard + 1,
        };
      });
    } else {
      this.setState(() => {
        return {
          activeCard: 0,
        };
      });
    }
  }

  pressPrev = () => {
    let deck = this.props.deck;
    let {activeCard} = this.state;
    if (0 < activeCard) {
      this.setState(() => {
        return {
          activeCard: this.state.activeCard - 1,
        };
      });
    } else {
      this.setState(() => {
        return {
          activeCard: deck.length - 1,
        };
      });
    }
  }

  render() {
    let deck = this.props.deck;
    let {activeCard} = this.state;

    let shufflerDisplay = (this.props.display == true) ? 'flex' : 'none'
    // if (this.props.display == true) {
    //   shufflerDisplay = 'flex';
    // } else {
    //   shufflerDisplay = 'none';
    // }
    return (
      <View
        style={{
          display: shufflerDisplay,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomButton onPress={this.props.handleExitPress} text="x" />
        <Text>{this.props.category}</Text>
        <Text>{deck[activeCard]['content']}</Text>
        <View style={styles.container}>
          <CustomButton onPress={this.pressPrev} text="prev" />
          <CustomButton onPress={this.pressNext} text="next" />
        </View>
      </View>
    );
  }
}

export default Shuffler;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoriesContainer: {
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
