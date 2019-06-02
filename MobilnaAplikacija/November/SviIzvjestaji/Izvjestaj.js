import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import UkupanBrojBodova from './UkupanBrojBodova'

export default class Izvjestaj extends Component {
  render() {
    const {id, title}=this.props.navigation.state.params;
    console.log(title);
    return (
    <ScrollView style={style.container}>
      <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>  
      <UkupanBrojBodova /> 
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