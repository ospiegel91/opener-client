import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import ShufflerIcon from '../ShufflerIcon/ShufflerIcon';

const {width, height} = Dimensions.get('screen');

class Controller extends Component {
  state = {};

  render() {
    return (
        <View style={styles.controller}>
          <ShufflerIcon 
            handlePress={this.props.handlePressPrev}
            name="navigate-before"
            type='material'
            disabled={false}
            size={24}
            color="#EF476F"
          />

          <ShufflerIcon 
            handlePress={this.props.handlePressNext}
            name="navigate-next"
            type='material'
            disabled={false}
            size={24}
            color="#EF476F"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    controller: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 220,
        justifyContent: 'space-around',
        marginBottom: 8,
      },
});

export default Controller;
