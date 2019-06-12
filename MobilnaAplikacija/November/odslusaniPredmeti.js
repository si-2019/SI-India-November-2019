import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';


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
              <ScrollView style={{width: "100%"}}>
                   <Text style={styles.subHeader}> {item.Naziv}</Text>
                   <FlatList
                        data = {item.Predmeti}
                        keyExtractor={item=>item.predmet}
                        renderItem = {({item}) => (
                            <ListItem
                                title={item.predmet}
                                chevron
                            />
                        )}
                       
                   />
              </ScrollView>
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
    
    
  },
  subHeader:{
    flex: 1,
    backgroundColor: '#195dc4',
    color: 'white',
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
