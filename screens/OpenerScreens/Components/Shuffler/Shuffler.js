import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import CustomButton from '../Button/Button';
import ShufflerIcon from '../ShufflerIcon/ShufflerIcon';
import SuccessBox from '../SuccessBox/SuccessBox';
import axios from 'axios';

class Shuffler extends Component {
  state = {};

  pressUpVote = () => {
    let {deck, activeCard} = this.props.deck;
    AsyncStorage.getItem('user-id').then(userId => {
      data = {
        "_userId": userId,
        "_openerId": deck[activeCard]['_id']
      }
      axios
        .post('http://127.0.0.1:3000/opener/up-vote', data)
        .then(response => {
          if (response.status == 200) {
            alert('thank you for your vote!')
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          console.log(err);
        });

    }).catch(err => {
      alert(err);
    });;
  }

  pressDownVote = () => {
    let {deck, activeCard} = this.props.deck;
    
    AsyncStorage.getItem('user-id').then(userId => {
      data = {
        "_userId": userId,
        "_openerId": deck[activeCard]['_id']
      }
      axios
        .post('http://127.0.0.1:3000/opener/down-vote', data)
        .then(response => {
          if (response.status == 200) {
            alert('thank you for your vote!')
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          console.log(err);
        });

    }).catch(err => {
      alert(err);
    });;
  }

  render() {
    let { deck, activeCard } = this.props;

    let shufflerDisplay = this.props.display ? 'flex' : 'none';
    return (
      <View
        style={{
          display: shufflerDisplay,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 50, marginTop: 10, marginBottom: 80}}>{this.props.category}</Text>
        <View>
            <ShufflerIcon 
              handlePress={this.props.handleCopy}
              name="content-copy"
              type='material'
              disabled={false}
            />
        </View>
        <View style={styles.container}>
          <ShufflerIcon 
            handlePress={this.props.handlePressPrev}
            name="navigate-before"
            type='material'
            disabled={false}
          />
          <View style={{flexDirection:'row', width: '68%'}}>
            <Text style={styles.message}>{deck[activeCard]['content']}</Text>
          </View>

          <ShufflerIcon 
            handlePress={this.props.handlePressNext}
            name="navigate-next"
            type='material'
            disabled={false}
          />
        </View>
        <View style={styles.voteToolcontainer}>
          <ShufflerIcon 
            handlePress={this.pressDownVote}
            name="thumbsdown"
            type='octicon'
            disabled={!this.props.loggedIn}
          />
          <SuccessBox deck={deck} activeCard={activeCard}/>
          <ShufflerIcon 
            handlePress={this.pressUpVote}
            name="thumbsup"
            type='octicon'
            disabled={!this.props.loggedIn}
          />
        </View>
        <View style={styles.backToolContainer}>
          <Text style={{fontSize: 22}}>Choose a different category?</Text>
          <ShufflerIcon 
              handlePress={this.props.handleExitPress}
              name="back"
              type='entypo'
              disabled={false}
          />
        </View>
      </View>
    );
  }
}

export default Shuffler;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
  message:{
    marginLeft: 15,
    marginRight: 15,
    fontSize: 28,
    flex: 1, 
    flexWrap: 'wrap',
  },
  backToolContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    marginTop: '15%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  voteToolcontainer: {
    marginTop: 100,
    width: 220,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
