import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  call,
  cond,
  interpolate,
  onChange,
  useAnimatedStyle,
  useCode,
} from 'react-native-reanimated';
import FrontCard from './frontCard';
import BackCard from './backCard';

type props = {
  rotateProgress: Animated.SharedValue<number>;
};

const card = ({rotateProgress}: props) => {
  //   const aniFrontCard = useAnimatedStyle(() => {
  //     const interZ = interpolate(
  //       rotateProgress.value,
  //       [0, 90, 91, 180],
  //       [2, 2, 1, 1],
  //     );
  //     return {
  //       //   zIndex: interZ,
  //     };
  //   });

  //   const aniBackCard = useAnimatedStyle(() => {
  //     const interZ = interpolate(
  //       rotateProgress.value,
  //       [0, 90, 91, 180],
  //       [1, 1, 2, 2],
  //     );
  //     return {
  //       //   zIndex: interZ,
  //     };
  //   });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            height: '100%',
            width: '100%',
            backgroundColor: 'red',
            position: 'absolute',
            backfaceVisibility: 'hidden',
          },
          //   aniFrontCard,
        ]}>
        <FrontCard />
      </Animated.View>
      <Animated.View
        style={[
          {
            height: '100%',
            width: '100%',
            backgroundColor: 'yellow',
            position: 'absolute',
            transform: [{rotateY: `180deg`}],
            backfaceVisibility: 'hidden',
          },
          //   aniBackCard,
        ]}>
        <BackCard />
      </Animated.View>
    </View>
  );
};

export default card;
