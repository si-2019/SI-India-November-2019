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
                   <Text style={{ fontSize: 23 }}> {item.Naziv}</Text>
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
    paddingTop: 10,
    alignItems: 'center',
    marginTop: 10,
    
  },
});
