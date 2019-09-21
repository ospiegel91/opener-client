import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import TopRightIcon from '../TopRightIcon/TopRightIcon';

const {width, height} = Dimensions.get('screen');

class Header extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <HeaderIcon 
            handlePress={this.props.handleLeftIcon}
            name="login"
            type='simple-line-icon'
            disabled={false}
        />
        <Text style={styles.text}>Opener</Text>
        <TopRightIcon loggedIn={this.props.loggedIn} handlePress={this.props.handleRightIcon} buttonType={this.props.topRightButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 38,
    height: height * 0.12,
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF6F9',
    shadowColor: '#235784',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginBottom: 12,
  },
  text:{
      fontSize: 26,
      color: '#235784',
      fontWeight: "600",
      paddingLeft: 8,
      paddingRight: 8,
  }
});

export default Header;
