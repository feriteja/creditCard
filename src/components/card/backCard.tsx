import React, {useMemo} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const backCard = ({cvv = '', cardNumber = ''}) => {
  const creditNumber = useMemo(() => {
    let currValue = cardNumber || '0000000000000000';
    const regex = /\d{1,4}/g;
    const result = currValue.match(regex) || [];

    return result.join(' ');
  }, [cardNumber]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <ImageBackground
        source={require('../../assets/bg/bg2.jpg')}
        resizeMode="cover"
        style={{flex: 1, paddingVertical: 10}}>
        <View style={{height: 40, backgroundColor: '#222'}} />
        <View style={{padding: 10}}>
          <Text style={{color: 'white', fontSize: 11}}>
            Autorized signature
          </Text>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 40,
                  backgroundColor: '#ccc',
                  flex: 1,
                }}
              />
              <View
                style={{
                  height: 40,
                  backgroundColor: '#ddd',
                  width: 80,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    transform: [{rotate: '-2deg'}, {skewY: '-2deg'}],
                    fontSize: 20,
                  }}>
                  {cvv || 'mm/yy'}
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignSelf: 'flex-end', paddingVertical: 10}}>
            <Text
              style={[
                styles.fontBasic,
                {
                  fontSize: 15,
                  fontFamily: 'creditCard',
                  transform: [{rotateY: '180deg'}],
                },
              ]}>
              {creditNumber}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default backCard;

const styles = StyleSheet.create({
  fontBasic: {
    color: '#fff',
    textShadowColor: '#000',
    opacity: 0.5,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});
