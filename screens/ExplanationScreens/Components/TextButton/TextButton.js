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
        marginTop: '5%',
        color:'#26547C',
        fontSize: 22,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#06D6A0',
        fontFamily: 'Gaegu',
    },

})

export default TextButton;