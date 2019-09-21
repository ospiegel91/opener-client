import React, {Component} from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';

class TopRightIcon extends Component {
  state = {};

//   handleLink = () => {
//     alert(this.props.buttonType);
//       if (this.props.buttonType == 'edit'){
//           return this.props.navigation.navigate('CreateOpenerScreen');
//       }
//     return this.props.navigation.navigate('HomeScreen');
//   };

  render() {
      if (this.props.buttonType == 'edit') {
          return (
            <HeaderIcon 
            handlePress={this.props.handlePress}
            name="edit"
            type='font-awesome'
            disabled={!this.props.loggedIn}
            />
          )
      } else {
        return (
            <HeaderIcon 
            handlePress={this.props.handlePress}
            name="home"
            type='font-awesome'
            disabled={false}
            />
          )
      }
  }
}

export default TopRightIcon;
