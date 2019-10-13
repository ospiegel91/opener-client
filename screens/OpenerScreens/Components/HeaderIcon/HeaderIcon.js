import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import { Icon } from 'react-native-elements';

const {width, height} = Dimensions.get('screen');


class HeaderIcon extends Component {
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
                backgroundColor="#26547C"
                size={22}
                reverseColor="#26547C"
                disabled={this.props.disabled}
            />
        )
    }
}

export default HeaderIcon;