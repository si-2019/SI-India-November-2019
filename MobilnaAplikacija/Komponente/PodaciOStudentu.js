import React, { Component } from 'react'
import { ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'


class PodaciOStudentu extends Component  {

render() {  
return (
<ScrollView>
    <View>
        <Text style = {styles.podnaslov}>
        Osnovni podaci
        </Text>
        <Text style = {styles.tekst1}>
        Ime:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Ime"/>
        <Text style = {styles.tekst1}>
        Prezime:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Prezme"/>
        <Text style = {styles.tekst1}>
        Spol:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Spol"/>
        <Text style = {styles.tekst1}>
        Broj indeksa:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "Broj indeksa"/>
        <Text style = {styles.tekst1}>
        JMBG:
        </Text>
        <TextInput style = {styles.input}
        placeholder = "JMBG"/>
    </View>
     
 </ScrollView>
);
}
}
export default PodaciOStudentu;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row'
    },
    button: {
    backgroundColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
    marginLeft: '18%',
    marginRight: '18%',
    marginBottom: 20
    },      
    podnaslov: {
    backgroundColor: '#B9D6DF',
    color: 'black',
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    },
    input: {
    marginLeft: 7,
    height: 40,
    borderWidth: 1,
    width: '90%',
    borderColor: 'lightgrey'
    },
    tekst1: {
    color: 'black',
    fontSize: 13,
    marginTop: 7,
    marginLeft: 10
    }
   })