import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Card, Lotie, Modal} from './src/components';
import CardFlip from 'react-native-card-flip';
import FrontCard from './src/components/card/frontCard';
import BackCard from './src/components/card/backCard';
import IconEntypo from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';

const App = () => {
  const [name, setName] = useState('CardHolder Name');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('0000');
  const CvvRef = useRef<TextInput | null>(null);
  const cardFlipRef = useRef<CardFlip>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const rotateCard = {
    onCvvFocus: () => {
      cardFlipRef.current?.flip();
    },
    onCvvUnfocus: () => {
      cardFlipRef.current?.flip();
    },
  };

  const numCardHandler = (text: string) => {
    if (text.match(/^[0-9]*$/)) {
      setCardNumber(text);
    }
  };

  const expiryHandler = (text: string) => {
    if (text.match(/^[0-9/]*$/)) {
      const regex = /\d{1,2}/g;
      const result = text.match(regex) || [''];

      setExpiry(result?.join('/'));
    }
  };

  return (
    <View style={styles.container}>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <View style={styles.header}>
        <View style={{position: 'absolute', left: 10}}>
          <IconEntypo name="chevron-left" size={35} color={'#fff'} />
        </View>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
          Add Card
        </Text>
      </View>
      <View style={styles.cardSection}>
        <CardFlip
          ref={cardFlipRef}
          flipDirection="y"
          duration={1000}
          style={[styles.card]}>
          <FrontCard name={name} cardNumber={cardNumber} expiry={expiry} />
          <BackCard cvv={cvv} cardNumber={cardNumber} />
        </CardFlip>
      </View>
      <View style={styles.inputSection}>
        <TouchableWithoutFeedback
          onPress={() => {
            CvvRef.current?.blur();
          }}>
          <View style={{flex: 1}}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Full Name"
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Card Number"
                keyboardType="numeric"
                maxLength={16}
                onChangeText={text => numCardHandler(text)}
                value={cardNumber}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Expiry(MM/YY)"
                  keyboardType="numeric"
                  maxLength={5}
                  onChangeText={text => expiryHandler(text)}
                  value={expiry}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  onChangeText={text => setCvv(text)}
                  ref={CvvRef}
                  keyboardType="numeric"
                  maxLength={4}
                  onFocus={() => rotateCard.onCvvFocus()}
                  onEndEditing={() => rotateCard.onCvvUnfocus()}
                  placeholder="CVV"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#007BFF',
            height: 50,
            borderRadius: 10,
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 20,
  },
  cardSection: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  card: {
    height: 200,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  inputSection: {
    flex: 4,
    backgroundColor: '#222',
    marginHorizontal: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  inputContainer: {
    backgroundColor: '#3f3f3f',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    maxHeight: 50,
    marginHorizontal: 5,
  },
});
