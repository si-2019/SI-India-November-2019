import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
 

class Potvrde extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: 0,
      svrha : 0
    }
  }

  render() {
    const lista = [{label: "Potvrda o redovnom studiju", value: "potvrda"},   
                  {label: "Uvjerenje o položenim ispitima", value: "uvjerenje"}];
    const svrhe = [{label: "Regulisanje zdravstvenog osiguranja", value: "zdravstveno"},    
                  {label: "Ostvarivanje prava na stipendiju", value: "stipendija"},
                  {label: "Upis na drugi fakultet", value: "upis"}];
    return (
      <View>
        <Text style={{fontSize: RF(3.5), margin: 70, alignSelf: 'center'}}>Zahtjev za izdavanje ovjerenog uvjerenja</Text>
        <Text style={{fontSize: RF(2.5), alignSelf: 'center'}}>Izaberite tip potvrde: </Text>
        <Picker
          selectedValue={lista[this.state.pickerSelection].value}
          mode='dropdown'
          style={{height: 80, width: 320, alignSelf: 'center'}}
          onValueChange={(itemValue, itemIndex) =>
            {this.setState({pickerSelection: itemIndex})}}
        >
          {lista.map(element =>{
            return (
                <Picker.Item key={element.value} label={element.label} value={element.value}/>
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
      </View>
    );
  }
}
export default Potvrde;
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
