import React, {Component} from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export class lottie extends Component {
  render() {
    return (
      <LottieView
        style={{height: 100, width: 100}}
        source={require('../../assets/lottie/coba2.json')}
        autoPlay
        loop
      />
    );
  }
}

export default lottie;
