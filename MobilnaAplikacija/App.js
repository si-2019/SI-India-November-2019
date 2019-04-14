import React from 'react';
import {Button, Alert, StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pickerSelection: 0,
      svrha : 0
    };
  }
  handleClick(tip,svrha) {
    Alert.alert(
      'Odabrani zahtjev',
      'Potvrda: '+ tip.label +'\nSvrha: '+ svrha.label,
      [
        {text: 'Predaj', onPress: () => console.log('Predao')},
          {
          text: 'Poništi',
          onPress: () => console.log('Poništio'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  render() {
    const svrhe = [{label: "Regulisanje zdravstvenog osiguranja", value: "zdravstveno"},    
                 {label: "Ostvarivanje prava na stipendiju", value: "stipendija"},
                 {label: "Upis na drugi fakultet", value: "upis"}];
    
    const tipovi = [{label: "Potvrda o redovnom studiju", value: "potvrda"},   
                  {label: "Uvjerenje o položenim ispitima", value: "uvjerenje"}];
    return (
      <View>
        <Text style={{fontSize: RF(3.5), margin: 70, alignSelf: 'center'}}>Zahtjev za izdavanje ovjerenog uvjerenja</Text>
        <Text style={{fontSize: RF(2.5), alignSelf: 'center'}}>Izaberite tip potvrde: </Text>
        <Picker
          selectedValue={tipovi[this.state.pickerSelection].value}
          mode='dropdown'
          style={{height: 80, width: 320, alignSelf: 'center'}}
          onValueChange={(itemValue, itemIndex) =>
            {this.setState({pickerSelection: itemIndex})}}
        >
          {tipovi.map(tip =>{
            return (
                <Picker.Item key={tip.value} label={tip.label} value={tip.value}/>
            );
          })}
        </Picker>
        
        <Text style={{fontSize: RF(2.5), alignSelf: 'center'}}>Odaberite svrhu uvjerenja: </Text>
        <Picker
          selectedValue={svrhe[this.state.svrha].value}
          mode='dropdown'
          style={{height: 80, width: 320, alignSelf: 'center'}}
          onValueChange={(itemValue, itemIndex) => this.setState({svrha: itemIndex})}>
          
          {svrhe.map(svrha =>{
            return (
                <Picker.Item key={svrha.value} label={svrha.label} value={svrha.value}/>
            );
          })}
        </Picker>

        <Button
       
          onPress= {() => this.handleClick(tipovi[this.state.pickerSelection],svrhe[this.state.svrha] )}
          title="Pošalji zahtjev"
          accessibilityLabel="Pošalji zahtjev studentskoj službi"
        />
      </View>
    );
  }
}
