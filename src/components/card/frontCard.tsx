import React, {useEffect, useMemo} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const frontCard = ({name = '', cardNumber = '', expiry = ''}) => {
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
        // paddingHorizontal: 10,
        // paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <ImageBackground
        source={require('../../assets/bg/bg1.jpg')}
        resizeMode="cover"
        style={{flex: 1, paddingHorizontal: 10, paddingVertical: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.fontBasic,
              {
                fontWeight: 'bold',
                fontSize: 20,
              },
            ]}>
            FerTeBank
          </Text>
        </View>
        <View style={{height: 10}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/bg/chip.png')}
            style={{height: 50, width: 50}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              top: -20,
            }}>
            <Text
              style={[
                styles.fontBasic,
                {
                  fontWeight: 'bold',
                  fontSize: 13,
                  position: 'absolute',
                  zIndex: 99,
                },
              ]}>
              Credit Card
            </Text>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'red',
                left: 10,
                borderRadius: 25,
              }}
            />
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'orange',
                right: 10,
                borderRadius: 25,
              }}
            />
          </View>
        </View>
        <View style={{height: 10}} />
        <Text
          style={[styles.fontBasic, {fontSize: 15, fontFamily: 'creditCard'}]}>
          {creditNumber}
        </Text>
        <View style={{height: 10}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.fontBasic, {fontSize: 20}]}>{name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 45}}>
              <Text
                style={[
                  styles.fontBasic,
                  {fontSize: 10, fontFamily: 'creditCard'},
                ]}
                adjustsFontSizeToFit
                numberOfLines={2}>
                VALID THRU
              </Text>
            </View>
            <View style={{width: 45}}>
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[styles.fontBasic]}>
                {expiry}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default frontCard;

const styles = StyleSheet.create({
  fontBasic: {
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});
