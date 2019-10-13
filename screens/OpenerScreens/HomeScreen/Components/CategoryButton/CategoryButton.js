import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import React, { Component } from 'react';
import Emoji from 'react-native-emoji';
import { black } from 'colorette';

const { width, height } = Dimensions.get('screen');


class CategoryButton extends Component {
    state = {};
    render(){
        return (
            <TouchableOpacity onPress={this.props.handleOnPress} style={styles.buttonContainer} {...this.props}>
            <Text>
                <Emoji name={this.props.emojiName} style={{fontSize: 25}} />
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </Text>

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
        marginLeft: 4,
        marginRight: 4,
        shadowColor: '#235784',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    buttonText:{
        fontSize: 28,
        color: 'black',
        marginLeft: 4,
        fontFamily: 'Gaegu',
    }
})

export default CategoryButton;