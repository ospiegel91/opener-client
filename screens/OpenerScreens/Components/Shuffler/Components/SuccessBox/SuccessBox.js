import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

class SuccessBox extends Component {
  state = {
    isSuccessRate: false,
    successRate: 0
  };

  componentDidUpdate(prevProps){
      if (this.props.activeCard !== prevProps.activeCard){
        this.obtainSuccessRate();
      }
  }

  obtainSuccessRate = () => {
    let {activeCard, deck} = this.props;
    let openerId = deck[activeCard]['_id'];
    axios
      .get('http://127.0.0.1:3000/opener/success?id=' + openerId)
      .then(response => {
        if (response.status == 200) {
          let rate = response.data['successRate'] * 100;
          this.setState(() => {
            return {
              isSuccessRate: true,
              successRate: rate,
            };
          });
        } else {
          this.setState(() => {
            return {
              isSuccessRate: false,
              successRate: 0,
            };
          });
        }
      })
      .catch(err => {
        
      });
  };

  render() {
    let { successRate, isSuccessRate } = this.state;
    let successRateDisplay = isSuccessRate ? 'flex' : 'none';
    return (
        <View style={{display: successRateDisplay}}>
            <Text style={styles.text}>Success:</Text>
            <Text style={styles.text}>{successRate}%</Text>     
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontFamily: 'Gaegu',
      textAlign: 'center'
    }
  });

export default SuccessBox;
