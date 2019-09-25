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
        height: height * 0.05,
        width: width *0.20,
        backgroundColor: 'rgb(255,82,76)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        fontSize: 18,
        color: 'white'
    }
})

export default CustomButton;