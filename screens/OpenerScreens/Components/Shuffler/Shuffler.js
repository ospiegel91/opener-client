import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage, Dimensions} from 'react-native';
import ShufflerIcon from '../Shuffler/Components/ShufflerIcon/ShufflerIcon';
import axios from 'axios';
import Title from './Components/Title/Title';
import Controller from './Components/Controller/Controller';
import Message from './Components/Message/Message';
import CopyTool from './Components/CopyTool/CopyTool';
import VoteTool from './Components/VoteTool/VoteTool';
import BackTool from './Components/BackTool/BackTool';

const {width, height} = Dimensions.get('screen');

class Shuffler extends Component {
  state = {};

  pressUpVote = () => {
    let {deck, activeCard} = this.props.deck;
    AsyncStorage.getItem('user-id')
      .then(userId => {
        data = {
          _userId: userId,
          _openerId: deck[activeCard]['_id'],
        };
        axios
          .post('http://127.0.0.1:3000/opener/up-vote', data)
          .then(response => {
            if (response.status == 200) {
              alert('thank you for your vote!');
            } else {
              alert(response.status);
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        alert(err);
      });
  };

  pressDownVote = () => {
    let {deck, activeCard} = this.props.deck;

    AsyncStorage.getItem('user-id')
      .then(userId => {
        data = {
          _userId: userId,
          _openerId: deck[activeCard]['_id'],
        };
        axios
          .post('http://127.0.0.1:3000/opener/down-vote', data)
          .then(response => {
            if (response.status == 200) {
              alert('thank you for your vote!');
            } else {
              alert(response.status);
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    let {deck, activeCard, category, display} = this.props;

    let shufflerDisplay = display ? 'flex' : 'none';
    let shufflerStyle = {
      display: shufflerDisplay,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFCF9',
    };
    return (
      <View style={shufflerStyle}>
        <Title category={category} />
        <Controller
          handlePressNext={this.props.handlePressNext}
          handlePressPrev={this.props.handlePressPrev}
        />
        <Message deck={deck} activeCard={activeCard} />
        <CopyTool handleCopy={this.props.handleCopy} />
        <VoteTool 
          deck={deck} 
          activeCard={activeCard} 
          loggedIn={this.props.loggedIn} 
          pressDownVote={this.pressDownVote} 
          pressUpVote={this.pressUpVote}
        />
        <BackTool handleExitPress={this.props.handleExitPress}/>
      </View>
    );
  }
}

export default Shuffler;


