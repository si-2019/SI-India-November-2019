import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default class changelog extends Component {
  //Komponenta za raspored
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Changelog: </Text>
        <Text>0.1.0</Text>
        <Text>November:</Text>
        <Text>-Urađen prikaz studentovih ličnih podataka</Text>
        <Text>-Na dashboard dodani predmeti koje student sluša kao i obaviještenja</Text>
        <Text>-Dodane ikonice za preusmjeravanje na webmail/dreamspark</Text>
        <Text>-Dodane informacije o prosjeku studenta</Text>
        <Text>India:</Text>
        <Text>-Omogućen odabir tipa i svrhe potvrde</Text>
        <Text>-Napravljen prikaz broja preostalih potvrda</Text>
        <Text>-Dodana mogućnost prikaza aktivnih i prijavljenih ispita</Text>
        <Text>-Napravljena opcija za odabir dana u sedmici pri pregledu rasporeda </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    //alignItems: 'left',
    marginTop: 50,
//    justifyContent: 'center',
  },
});