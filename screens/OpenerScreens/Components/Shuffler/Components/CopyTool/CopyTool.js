import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import ShufflerIcon from '../ShufflerIcon/ShufflerIcon';


const {width, height} = Dimensions.get('screen');

class CopyTool extends Component {
  state = {};

  render() {
    return (
        <View style={styles.copyToolContainer}>
            <Text style={styles.copyGuideText}>click to copy -></Text>
            <ShufflerIcon 
              handlePress={this.props.handleCopy}
              name="content-copy"
              type='material'
              disabled={false}
              size={22}
              color="black"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    copyToolContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width * 0.80,
        marginTop: '4%',
        marginBottom: '2%',
      },
      copyGuideText:{
        fontSize: 16, 
        fontFamily: 'Gaegu'
      },
});

export default CopyTool;
