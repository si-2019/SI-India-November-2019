import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Naslov extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}> Poslani zahtjevi za potvrde </Text> 
      </View>
    );
  }
}


const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',    
  },
  header:{
    fontSize: 24,
    paddingBottom: 10, 
    paddingTop: 40,
    marginBottom: 50,
  }
});
