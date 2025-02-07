import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ResultModal(props){    

  return(
    <View style={styles.container} >

      <Image 
        source={require('../assets/gas.png')}
        style={styles.img}
      />

      <Text style={styles.bestOption} > The best option is: {props.result} </Text>
      <Text style={[styles.txt, {fontWeight: 'bold'}]} > With the prices: </Text>
      <Text style={styles.txt} > Alcohol: {props.priceAlcohol} </Text>
      <Text style={styles.txt} > Gasoline: {props.priceGasoline} </Text>

      <TouchableOpacity style={styles.btn} onPress={props.closeModal} >
        <Text style={styles.btnText} > Calculate again </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',   
    backgroundColor: 'black'
  },
  img:{
    marginTop: 40,
    marginBottom: 20, 
  },
  bestOption:{
    fontSize: 25,
    marginBottom: 20,
    color: 'green',
    fontWeight: 'bold'
  },
  txt: {
    fontSize: 20,    
    color: '#fff',
    marginBottom: 5
  },
  btn:{
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