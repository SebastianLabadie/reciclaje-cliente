import React, { useState } from 'react';
import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function ModalTel({modalVisible, setModalVisible,type,data,handleScaned}:any) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
        <Image style={styles.image} source={require('../../assets/images/iconoici.jpg')} />
           
            <Text style={styles.modalText}>{`El codigo de de tipo ${type} y contiene esta informacion: ${data}`}</Text>
             <Text style={styles.modalText}>PD: PELADO QUE PASO?</Text>
            <Button title={'Aprieta para escanear devuelta!'} onPress={()=>handleScaned()} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image:{
    width:200,
    height:49,
    marginBottom:10
  },
});