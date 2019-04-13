import React, { Component } from 'react'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'

class Slika extends Component  {
render() {  
return (
<View >
<Text style = {styles.podnaslov}>
    Slika
</Text>
<View >
<TouchableOpacity  >
 <Text>
 Choose File
 </Text>
 </TouchableOpacity>
 <TouchableOpacity  >
 <Text>
 Dodaj sliku
 </Text>
 </TouchableOpacity>
 </View>
</View>
);
}
}
export default Slika

const styles = StyleSheet.create({  
  podnaslov: {
  backgroundColor: '#B9D6DF',
  color: 'black',
  padding: 5,
  fontSize: 15,
  fontWeight: 'bold',
  marginTop: 10,
  }
 })