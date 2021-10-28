import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [screenValue, setScreenValue] = useState('0');

  const pressButton = (button) =>{
    if (button == 'C'){
      setScreenValue('0')
    }
    if (button == '='){
      setScreenValue(eval(screenValue.replace('X', '*')))
    }
    else if (screenValue.length < 8){
      if (screenValue == '0'){
        setScreenValue(button)
      }
      else{
        setScreenValue(screenValue + button)
      }
    }
  }

  const pressButtonOperation = (button) =>{
    if (!['x', '+', '-', '/'].includes(screenValue.charAt(screenValue.length-1)) && screenValue.length < 8){
      setScreenValue(screenValue + button)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenTextView}>
        <Text style={styles.screenText}>{screenValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('7')}}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('8')}}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('9')}}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#DC7633'}]} onPress={()=>{pressButtonOperation('X')}}>
          <Text style={[styles.buttonText, {fontSize: 30}]}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('4')}}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('5')}}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('6')}}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#DC7633'}]} onPress={()=>{pressButtonOperation('-')}}>
          <Text style={[styles.buttonText, {fontSize: 30}]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('1')}}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('2')}}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('3')}}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#DC7633'}]} onPress={()=>{pressButtonOperation('+')}}>
          <Text style={[styles.buttonText, {fontSize: 30}]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('0')}}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('.')}}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={()=>{pressButton('C')}}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#DC7633'}]} onPress={()=>{pressButtonOperation('/')}}>
          <Text style={[styles.buttonText, {fontSize: 30}]}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.buttons, {backgroundColor: '#DC7633', width: 375}]} onPress={()=>{pressButton('=')}}>
          <Text style={[styles.buttonText, {fontSize: 30}]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 12
  },
  buttons:{
    backgroundColor: 'gray',
    padding: 22,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  buttonText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  screenText:{
    fontSize:80,
    color: 'white'
  },
  screenTextView:{
    alignSelf: 'flex-end',
    marginRight: 12
  }

});
