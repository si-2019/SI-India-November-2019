import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class odslusaniPredmeti extends React.Component {
  
  constructor(props)
  {
       super(props);
       this.state = 
       {
           lista: []
       }
  }


  dohvatiPredmete()
    {
        //Ubaciti api poziv

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

    
    componentWillMount()
    {
        this.dohvatiPredmete();
    }

    renderItem = ({item}) => {
          return (
              <>
                   <Text style={{ fontSize: 23 }}> {item.Naziv}</Text>
                   <FlatList
                        data = {item.Predmeti}
                        keyExtractor={item=>item.predmet}
                        renderItem = {({item}) => <Text>{item.predmet}</Text>}
                   />
              </>
          )
    }
  
  render() {
        return (
      <View style={styles.MainContainer}>
           <FlatList
            data = {this.state.lista}
            keyExtractor = {item => item.Naziv}
            renderItem = {this.renderItem}
           />
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
