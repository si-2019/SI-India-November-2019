import React from 'react';
import {Button, Alert, StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
 

export default class BesplatnePotvrde extends React.Component {
   
    
    render() {
        let besplatne_potvrde=5;
        const jedna_bp = <Text>1 besplatna potvrda!</Text>
    const pet_bp = <Text>5 besplatnih potvrda!</Text>
    const izmedju_bp = ' besplatne potvrde!'
    let kraj_rec= <Text></Text>
    let pocetak_recenice = <Text>Preostalo vam je </Text>
    if(besplatne_potvrde == 5){
      kraj_rec = pet_bp;
    } else if(besplatne_potvrde == 1){
      kraj_rec = jedna_bp;
      pocetak_recenice=<Text>Preostala vam je </Text>
    }
    else if(besplatne_potvrde>=2 && besplatne_potvrde<=4){
      kraj_rec= besplatne_potvrde.toString()+izmedju_bp;
      pocetak_recenice=<Text>Preostale su vam </Text>
    }
    else{
      pocetak_recenice=<Text></Text>
      kraj_rec=<Text>Nemate više besplatnih potvrda!</Text>
    }
      return (
        <View style={styles.MainContainer}>
          
        <Text style={{fontSize: RF(2.5), alignSelf: 'center', color:'red'}}>
          <Text>{pocetak_recenice}</Text>
          <Text>{kraj_rec}</Text>
        </Text>
          <Text></Text>
      
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      marginTop: 50,
      justifyContent: 'center',
    },
  });