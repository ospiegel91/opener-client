import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import React, { Component } from 'react';

const { width, height } = Dimensions.get('screen');


class CustomButton extends Component {
    state = {};
    render(){
        return (
            <TouchableOpacity style={styles.buttonContainer} {...this.props}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        height: height * 0.08,
        width: width *0.9,
        backgroundColor: '#EF476F',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        fontFamily: 'Gaegu',
        fontSize: 30,
        color: 'white'
    }
})

export default CustomButton;