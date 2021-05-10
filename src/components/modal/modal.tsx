import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

interface props {
  modalVisible: boolean;
  setModalVisible: (a: boolean) => void;
}

const modal = ({modalVisible, setModalVisible}: props) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (modalVisible == true) {
      setTimeout(() => {
        setSaved(true);
      }, 3000);
    }
  }, [modalVisible]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setSaved(false);
        setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={{height: 200, width: 200}}>
          <LottieView
            source={
              saved
                ? require('../../assets/lottie/successTick.json')
                : require('../../assets/lottie/coba1.json')
            }
            autoPlay
            loop
          />
        </View>
        {saved && (
          <Text style={{fontWeight: 'bold', fontSize: 17, color: 'white'}}>
            Card number Saved
          </Text>
        )}
      </View>
    </Modal>
  );
};

export default modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99999922',
  },
});
