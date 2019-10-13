import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import { Icon } from 'react-native-elements';

const {width, height} = Dimensions.get('screen');


class ShufflerIcon extends Component {
    state = {};
    render(){
        return (
            <Icon
                onPress={this.props.handlePress}
                name={this.props.name}
                type={this.props.type}
                color='white'
                reverse={true}
                raised={true}
                backgroundColor={this.props.color}
                size={this.props.size}
                reverseColor={this.props.color}
                disabled={this.props.disabled}
            />
        )
    }
}

export default ShufflerIcon;