import React, {Component} from 'react';
import {View, StyleSheet, AsyncStorage, Clipboard} from 'react-native';
import axios from 'axios';

import Header from '../Components/Header/Header';
import GuideTextBox from './Components/GuideTextBox/GuideTextBox';
import CategoryButton from './Components/CategoryButton/CategoryButton'
import Shuffler from '../Components/Shuffler/Shuffler';

class HomeScreen extends Component {
  state = {
    isLoggedIn: false,
    category: 'random',
    shufflerDisplay: false,
    deck: [{content: 'mock'},{content: 'mock'}],
    activeCard: 1,
    isSuccessRate: false,
    successRate: 0,
  };
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

  writeToClipboard = async () => {
    let {activeCard, deck} = this.state;
    await Clipboard.setString(deck[activeCard]['content']);
    alert('Copied to Clipboard!');
  };

  handleCategoryButtonPress = cat => {
    let url =
      cat !== 'random' ? 'retrieve-by-cat?category=' + cat : 'retrieve-all';
    axios
      .get('http://127.0.0.1:3000/opener/' + url)
      .then(response => {
        if (response.status == 200) {
          this.setState(() => {
            return {
              activeCard: 0,
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
        alert(err);
      });
  };

  handleExitButtonPress = () => {
    this.setState(() => {
      return {
        shufflerDisplay: false,
      };
    });
  };

  handleLeftHeaderIcon = () => {
    if (this.state.isLoggedIn) {
      return this.props.navigation.navigate('LogoutScreen');
    }
    return this.props.navigation.navigate('LoginScreen');
  };

  handleRightHeaderIcon = () => {
    return this.props.navigation.navigate('CreateOpenerScreen');
  };

  pressNext = () => {
    let {activeCard, deck} = this.state;
    if (deck.length - 1 > activeCard) {
      this.setState(() => {
        return {
          activeCard: this.state.activeCard + 1,
        };
      });
    } else {
      this.setState(() => {
        return {
          activeCard: 0,
        };
      });
    }
  };

  pressPrev = () => {
    let {activeCard, deck} = this.state;
    if (0 < activeCard) {
      this.setState(() => {
        return {
          activeCard: this.state.activeCard - 1,
        };
      });
    } else {
      this.setState(() => {
        return {
          activeCard: deck.length - 1,
        };
      });
    }
  };

  render() {
    let screenDisplay = this.state.shufflerDisplay == true ? 'none' : 'flex';
    return (
      <View style={styles.container}>
        <Header
          loggedIn={this.state.isLoggedIn}
          handleRightIcon={this.handleRightHeaderIcon}
          handleLeftIcon={this.handleLeftHeaderIcon}
          topRightButton="edit"
        />
        <View style={{display: screenDisplay}}>
          <GuideTextBox/>
          <View style={styles.categoriesContainer}>
            <CategoryButton
              handleOnPress={this.handleCategoryButtonPress.bind(
                this,
                'random',
              )}
              text="Random"
              emojiName="question"></CategoryButton>
            <CategoryButton
              handleOnPress={this.handleCategoryButtonPress.bind(this, 'yoga')}
              text="Yoga"
              emojiName="woman_in_lotus_position"></CategoryButton>
          </View>
        </View>
        <Shuffler
          handlePressNext={this.pressNext}
          handlePressPrev={this.pressPrev}
          activeCard={this.state.activeCard}
          loggedIn={this.state.isLoggedIn}
          deck={this.state.deck}
          isSuccessRate={this.state.isSuccessRate}
          sucessRate={this.state.successRate}
          handleExitPress={this.handleExitButtonPress}
          display={this.state.shufflerDisplay}
          category={this.state.category}
          handleCopy={this.writeToClipboard}
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  categoriesContainer: {
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
});
