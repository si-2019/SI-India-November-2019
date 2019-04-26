import React from 'react';
import {Button, Alert, StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      besplatne_potvrde: 5
    };
  }

  render() {
      
    const jedna_bp = <Text>1 besplatna potvrda!</Text>
    const pet_bp = <Text>5 besplatnih potvrda!</Text>
    const izmedju_bp = ' besplatne potvrde!'
    let kraj_rec;
    let pocetak_recenice = <Text>Preostalo vam je </Text>
    if(this.state.besplatne_potvrde == 5){
      kraj_rec = pet_bp;
    } else if(this.state.besplatne_potvrde == 1){
      kraj_rec = jedna_bp;
      pocetak_recenice=<Text>Preostala vam je </Text>
    }
    else if(this.state.besplatne_potvrde>=2 && this.state.besplatne_potvrde<=4){
      kraj_rec= this.state.besplatne_potvrde.toString()+izmedju_bp;
      pocetak_recenice=<Text>Preostale su vam </Text>
    }
    else{
      pocetak_recenice=<Text></Text>
      kraj_rec=<Text>Nemate više besplatnih potvrda!</Text>
    }

    return (
      <View>
        <Text style={{fontSize: RF(2.5), alignSelf: 'center', color:'red'}}>
          <Text>{pocetak_recenice}</Text>
          <Text>{kraj_rec}</Text>
        </Text>
          <Text></Text>
      </View>
    );
  }
}