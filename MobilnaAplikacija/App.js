import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
import Potvrde from './India/Potvrde'
 

export default class App extends React.Component {

  
  render() {
    
    return (
      <View>
        <Potvrde/>
      </View>
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/