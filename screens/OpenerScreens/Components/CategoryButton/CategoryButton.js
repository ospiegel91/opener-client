import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import React, { Component } from 'react';
import Emoji from 'react-native-emoji';
import { black } from 'colorette';

const { width, height } = Dimensions.get('screen');


class CategoryButton extends Component {
    state = {};
    render(){
        return (
            <TouchableOpacity style={styles.buttonContainer} {...this.props}>
                <Emoji name={this.props.emojiName} style={{fontSize: 22}} />
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
    },
    buttonText:{
        fontSize: 22,
        color: 'black',
        marginLeft: 4,
    }
})

export default CategoryButton;