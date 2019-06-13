import React, { Component } from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

let http=axios.create();
http.defaults.timeout = 200;
class PolozeniIzvjestaj extends Component {

  // default State object
  state = {
    polozeni: []
  };

  dohvatiPolozene()
  {
      this.state.polozeni = 
      [
           {
              key:"1",
              naziv:"Projektovanje informacionih sistema"
           },
           {
              key:"2",
              naziv:"Projektovanje i sinteza digitalnih sistema"
           }
      ]
  }

  
    componentWillMount() 
    {
        this.dohvatiPolozene();   
    }


  render() {
    return (
      <ScrollView >
      <Text style={styles.tekstov}>Niste položili predmete:</Text>
      <FlatList
          data={this.state.polozeni}
          keyExtractor = {item => item.key}
          renderItem={({ item }) => (
            <ListItem
            title={item.naziv}
             />
          )}
        />
      </ScrollView>
    );
  }
  
}

//Hardkodirani podaci Za slučaj kad se ne može konektovati na bazu
export default PolozeniIzvjestaj;


const styles = StyleSheet.create({
  item: {
    padding: 5,
    margin: 5,
    fontSize: 16,
    height: 80,
  },
  Viewitem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewitem1: {
    borderWidth: 1,  
    borderColor: "black",
    backgroundColor: "#ededed",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%'
  },
  Viewitem2: {
    borderWidth: 1,  
    borderColor: "black",
    backgroundColor: "#ededed",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tekstov:
  {
      fontSize: 24,
      
  }
});

