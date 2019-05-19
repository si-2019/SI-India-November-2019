import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Ispiti from "./Ispiti";
import Zadace from "./Zadace";
import ProgressBar from "./ProgressBar"
export default class Predmet extends Component {
  render() {
 //     console.log(this.props);
    const {title, profesor, ECTS, asistenti,ispiti, zadace}=this.props.navigation.state.params;
   // console.log(ispiti);
    return (
    <ScrollView style={style.container}>
      <Text style={style.text}>Naziv predmeta: {title}{"\n"}</Text>
      <Text style={style.text}>Ime profesora: {profesor}</Text>
      <Text style={style.text}>Broj ECTS bodova: {ECTS}</Text>
      <Text style={style.text}>Asistenti: {asistenti}{"\n"}</Text>
      
      <ProgressBar zadace={zadace} ispiti={ispiti}/>
      <Zadace zadace={zadace}/>
      <Text>{"\n"}</Text>
      <Ispiti ispiti={ispiti} />     
     
    </ScrollView>
    )
  }
}
const style=StyleSheet.create({
  container: {
    margin: 10
  }, 
  text:{
        fontSize:19
    }
})
