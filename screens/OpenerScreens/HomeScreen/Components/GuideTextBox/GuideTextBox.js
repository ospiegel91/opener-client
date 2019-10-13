import {View, Text, StyleSheet} from 'react-native';
import React, { Component } from 'react';


class GuideTextBox extends Component {
    state = {};
    render(){
        return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>What is she into..?</Text>
            <Text style={styles.textAlt}>... based on her profile pics and/or short-bio.</Text>
            <Text style={styles.textAlt}>Choose a topic below:</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 42,
        marginBottom: 2,
        fontFamily: 'Gaegu',
      },
      textAlt: {
        marginTop: 6,
        fontSize: 26,
        marginBottom: 2,
        fontFamily: 'Gaegu',
        textAlign: 'center',
      },
      textContainer:{
        marginTop: 50,
        height: 100,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

})

export default GuideTextBox;