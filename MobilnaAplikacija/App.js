import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Picker, Alert, Platform } from 'react-native';
import RF from "react-native-responsive-fontsize"


export default class HelloWorldApp extends Component {
	
	constructor(){
     super();
     this.state={
       PickerSelectedVal : ''
     }
   }
	getSelectedPickerValue=()=>{
      //Alert.alert("Odabrao si : " + this.state.PickerSelectedVal);
}
	
  render() {
    return (
      <View>
	    <Text style={{fontSize: RF(3.5), margin: 70, alignSelf: 'center'}}>Zahtjev za izdavanje ovjerenog uvjerenja</Text>
		<Text style={{fontSize: RF(2.5), alignSelf: 'center'}}>Odaberite svrhu uvjerenja: </Text>
		<Picker
			selectedValue={this.state.svrha}
			mode='dropdown'
			style={{height: 80, width: 320, alignSelf: 'center'}}
			onValueChange={(itemValue, itemIndex) => this.setState({svrha: PickerSelectedVal})}>
			
		<Picker.Item label="Regulisanje zdravstvenog osiguranja" value="zdravstveno" />
		<Picker.Item label="Ostvarivanje prava na stipendiju" value="stipendija" />
		<Picker.Item label="Upis na drugi fakultet" value="upis" />
		</Picker>
      </View>
    );
  }
}
