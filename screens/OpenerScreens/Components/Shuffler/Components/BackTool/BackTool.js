import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import ShufflerIcon from '../ShufflerIcon/ShufflerIcon';


const {width, height} = Dimensions.get('screen');

class BackTool extends Component {
  state = {};

  render() {
    return (
        <View style={styles.backToolContainer}>
          <Text style={{fontFamily: 'Gaegu', fontSize: 20}}>
            Choose a different category?
          </Text>
          <ShufflerIcon
            handlePress={this.props.handleExitPress}
            name="back"
            type="entypo"
            disabled={false}
            size={28}
            color="#FFD166"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    backToolContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 100,
        marginTop: '4%',
        fontFamily: 'Gaegu',
      },
});

export default BackTool;
