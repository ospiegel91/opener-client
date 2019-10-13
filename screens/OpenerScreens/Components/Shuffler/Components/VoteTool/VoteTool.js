import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import ShufflerIcon from '../ShufflerIcon/ShufflerIcon';
import SuccessBox from '../SuccessBox/SuccessBox';


const {width, height} = Dimensions.get('screen');

class VoteTool extends Component {
  state = {};

  render() {
    let {deck, activeCard} = this.props;
    return (
        <View style={styles.voteToolcontainer}>
          <ShufflerIcon
            handlePress={this.props.pressDownVote}
            name="thumbsdown"
            type="octicon"
            disabled={!this.props.loggedIn}
            size={31}
            color="#26547C"
          />
          <SuccessBox deck={deck} activeCard={activeCard} />
          <ShufflerIcon
            handlePress={this.props.pressUpVote}
            name="thumbsup"
            type="octicon"
            disabled={!this.props.loggedIn}
            size={31}
            color="#26547C"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    voteToolcontainer: {
        marginTop: '2%',
        width: 220,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});

export default VoteTool;
