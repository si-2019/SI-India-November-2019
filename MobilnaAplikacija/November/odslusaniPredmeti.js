import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default class odslusaniPredmeti extends Component {
  
  cosntructor(props)
  {
      
      this.state =
      {
           lista: []
      }
  }

  dohvatiPredmete()
    {
         this.state.lista = 
         [
             {
                Naziv:"Zimski semestar 2016/2017",
                Predmeti:
                [
                    {predmet: "Inženjerska matematika 1"},
                    {predmet: "Inženjerska fizika 1"},
                    {predmet: "Linearna algebra i geometrija"},
                    {predmet: "Osnove elektrotehnike"},
                    {predmet: "Osnove računarstva"}
                ]
             },
             {
              Naziv:"Ljetni semestar 2016/2017",
              Predmeti:
              [
                  {predmet: "Inženjerska matematika 2"},
                  {predmet: "Tehnike programiranja"},
                  {predmet: "Vjerovatnoća i statistika"},
                  {predmet: "Matematička logika i teorija izračunljivosti"},
                  {predmet: "Operativni sistemi"}
              ]
           }
         ]
    }
  
  render() {
        return (
      <View style={styles.MainContainer}>
          
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
