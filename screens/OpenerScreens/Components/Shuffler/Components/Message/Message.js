import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';


const {width, height} = Dimensions.get('screen');

class Message extends Component {
  state = {};

  render() {
    let { deck, activeCard } = this.props;
    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row', width: '96%'}}>
            <Text style={styles.message}>{deck[activeCard]['content']}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    message:{
        marginLeft: 5,
        marginRight: 5,
        padding: 6,
        fontSize: 20,
        flex: 1, 
        flexWrap: 'wrap',
        fontFamily: 'Gaegu',
        backgroundColor: 'white',
        shadowColor: '#06D6A0',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
});

export default Message;
