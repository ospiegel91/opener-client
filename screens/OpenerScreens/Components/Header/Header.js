import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import TopRightIcon from '../TopRightIcon/TopRightIcon';

const {width, height} = Dimensions.get('screen');

class Header extends Component {
  state = {};

  render() {
    let symbolName = (this.props.loggedIn) ? 'logout' : 'login'
    return (
      <View style={styles.container}>
        <HeaderIcon 
            handlePress={this.props.handleLeftIcon}
            name={symbolName}
            type='antdesign'
            disabled={false}
        />
        <Text style={styles.text}>yadda yadda ...</Text>
        <TopRightIcon loggedIn={this.props.loggedIn} handlePress={this.props.handleRightIcon} buttonType={this.props.topRightButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 38,
    paddingBottom: 6,
    height: height * 0.14,
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#26547C',
    shadowColor: '#235784',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginBottom: 12,
  },
  text:{
    fontFamily: 'Gaegu',
      fontSize: 32,
      color: '#235784',
      fontWeight: "600",
      paddingLeft: 8,
      paddingRight: 8,
      color: 'white',
  }
});

export default Header;
