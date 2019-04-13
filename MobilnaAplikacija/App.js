import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import RF from "react-native-responsive-fontsize"
 

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pickerSelection: "Potvrda o redovnom studiju"
    }
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: RF(3.5), margin: 70, alignSelf: 'center'}}>Zahtjev za izdavanje ovjerenog uvjerenja</Text>
        <Text style={{fontSize: RF(2.5), alignSelf: 'center'}}>Izaberite tip potvrde: </Text>
        <Picker
          selectedValue={this.state.pickerSelection}
          mode='dropdown'
          style={{height: 80, width: 320, alignSelf: 'center'}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({pickerSelection: itemValue})}
        >
          <Picker.Item label="Potvrda o redovnom studiju" value="potvrda" />
          <Picker.Item label="Uvjerenje o položenim ispitima" value="uvjerenje" />
        </Picker>
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