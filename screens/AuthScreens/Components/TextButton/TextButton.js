import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React, { Component } from 'react';


class TextButton extends Component {
    state = {};
    render(){
        return (
            <TouchableOpacity {...this.props}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'rgb(174,149,149)',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'rgb(174,149,149)',
    },

})

export default TextButton;