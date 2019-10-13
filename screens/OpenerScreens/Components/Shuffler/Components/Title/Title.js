import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import Emoji from 'react-native-emoji';

import EmojiDict from '../../../../../../assets/EmojiDict/EmojiDict';

const {width, height} = Dimensions.get('screen');

class Title extends Component {
  state = {};

  render() {
    return (
        <View style={styles.titleContainer}>
          <Text style={{textAlign: 'center'}}>
            <Emoji name={EmojiDict[this.props.category]} style={{fontSize: 50}} />
            <Text style={styles.titleText}>{this.props.category}</Text>
          </Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    titleContainer:{
        marginTop: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: 90,
      },
      titleText:{
        fontSize: 50, 
        fontFamily: 'Gaegu',
      },
});

export default Title;
