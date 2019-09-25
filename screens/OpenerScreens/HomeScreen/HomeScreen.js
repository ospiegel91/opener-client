import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import CategoryButton from '../Components/CategoryButton/CategoryButton';
import Shuffler from '../Components/Shuffler/Shuffler';
import Header from '../Components/Header/Header';
import axios from 'axios';

class HomeScreen extends Component {
  state = {
      isLoggedIn: false,
      category: 'random',
      shufflerDisplay: false,
      deck: [{"content": "mock"}],
  }
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    AsyncStorage.getItem('x-auth').then(token => {
      axios
        .get('http://127.0.0.1:3000/private/private', {
          headers: {
            'x-auth': token,
          },
        })
        .then(reponse => {
          if (reponse.status == 200) {
            this.setState(() => {
              return {
                isLoggedIn: true,
              };
            });
          } else {
            this.setState(() => {
              return {
                isLoggedIn: false,
              };
            });
          }
        })
        .catch(() => {
          this.setState(() => {
            return {
              isLoggedIn: false,
            };
          });
        });
    });
  };

  handleCategoryButtonPress = (cat) => {
    axios
        .get('http://127.0.0.1:3000/opener/retrieve-by-cat?category='+cat)
        .then(response => {
          if (response.status == 200) {
            this.setState(() => {
                return {
                    deck: response.data,
                    category: cat,
                    shufflerDisplay: true,
                };
              });
          } else {
            alert(response.status);
          }
        })
        .catch(err => {
          alert(err)
        });
  }

  handleExitButtonPress = () => {
    this.setState(() => {
      return {
        shufflerDisplay: false,
      };
    });
  }

  handleLeftHeaderIcon = () => {
    if (this.state.isLoggedIn){
      return alert('already logged in - should direct to log out')
    }
    return this.props.navigation.navigate('LoginScreen');
  };

  handleRightHeaderIcon = () =>{
    return this.props.navigation.navigate('CreateOpenerScreen');
  }

  render() {
    let screenDisplay = (this.state.shufflerDisplay == true) ? 'none' : 'flex'
    // let screenDisplay = 'flex';
    // if(this.state.shufflerDisplay == true){
    //   screenDisplay = 'none'
    // }else{
    //   screenDisplay = 'flex'
    // }
    return (
      <View style={styles.container}>
        <Header loggedIn={this.state.isLoggedIn} handleRightIcon={this.handleRightHeaderIcon} handleLeftIcon={this.handleLeftHeaderIcon} topRightButton="edit"/>
        <View style={{display: screenDisplay}}>
          <Text style={styles.text}>Select category:</Text>
          <View style={styles.categoriesContainer}>
            <CategoryButton handleOnPress={this.handleCategoryButtonPress.bind(this, 'random')} text="Random" emojiName="question"></CategoryButton>
            <CategoryButton handleOnPress={this.handleCategoryButtonPress.bind(this, 'yoga')} text="Yoga" emojiName="woman_in_lotus_position"></CategoryButton>
          </View>
        </View>
        <Shuffler deck={this.state.deck} handleExitPress={this.handleExitButtonPress} display={this.state.shufflerDisplay} category={this.state.category}/>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginBottom: 20
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesContainer:{
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
});
