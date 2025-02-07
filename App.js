import React, { useState } from "react";
import { Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, Modal, Alert, ScrollView } from "react-native";
import ResultModal from "./src/ResultModal";

export default function App() {

  const [alcohol, setAlcohol] = useState('')
  const [gasoline, setGasoline] = useState('')
  const [modal, setModal] = useState(false)
  const [finalResult, setFinalResult] = useState()

  function calculateResult() {
    const alcoholPriceFloat = parseFloat(alcohol)
    const gasolinePriceFloat = parseFloat(gasoline)

    const result = alcoholPriceFloat / gasolinePriceFloat
    if( result < 0.7){
      setFinalResult('Alcohol')
    }
    else {
      setFinalResult('Gasoline')
    }    
  }

  function openModal() {
    if (alcohol === '' || gasoline === '') {
      return Alert.alert('Please write the prices')
    }
    calculateResult()
    setModal(true)    
  }

  function resetInputs() {
    setAlcohol('');
    setGasoline('');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView} >
      <SafeAreaView style={styles.container} >

        <Image
          source={require('./src/assets/logo.png')}
          style={styles.img}
        />

        <Text style={styles.txt} > What's the best option? </Text>

        <Text style={styles.txtPrice} > Alcohol (price per liter) </Text>
        <TextInput
          value={alcohol}
          onChangeText={(alcohol) => setAlcohol(alcohol)}
          placeholder="Alcohol price ex: R$ 3,50"
          style={styles.txtInput}
          keyboardType="numeric"
        />

        <Text style={[styles.txtPrice, { margin: 10 }]} > Gasoline (price per liter) </Text>
        <TextInput
          value={gasoline}
          onChangeText={(gasoline) => setGasoline(gasoline)}
          placeholder="Gasoline price ex: R$ 5,89"
          style={styles.txtInput}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.btnView} onPress={openModal} >
          <Text style={styles.btnText} > Calculate </Text>
        </TouchableOpacity>


        <Modal visible={modal} animationType="slide" transparent={false} >
          <ResultModal
            closeModal={() => {
              setModal(false);
              resetInputs(); 
            }}
            priceAlcohol={alcohol}
            priceGasoline={gasoline}
            result={finalResult}
          />
        </Modal>

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView:{
    flexGrow: 1,   
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  img: {
    marginTop: 40,
    marginBottom: 20
  },
  txt: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff'
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
    padding: 20,
    width: '90%',
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: '#fff'
  },
  txtPrice: {
    textAlign: 'left',
    width: '90%',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnView: {
    backgroundColor: 'red',
    width: '90%',
    borderRadius: 10,
    marginTop: 15,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 18
  }
})
