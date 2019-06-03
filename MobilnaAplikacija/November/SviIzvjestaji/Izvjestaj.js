import React, { Component } from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import UkupanBrojBodova from './UkupanBrojBodova'

export default class Izvjestaj extends Component {
  render() {
    const {id, title}=this.props.navigation.state.params;
    console.log(title);

    //Izvjestaj za bodove ukupno ...
    if(id==2)
    return (
    <ScrollView style={style.container}>
      <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>  
      <UkupanBrojBodova /> 
    </ScrollView>
    )
    //Izvjestaj o bodovima za prisustvo...
    else if(id==1)
    return (
      <ScrollView style={style.container}>
        <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>
      </ScrollView>
      )
      
    //Izvjestaj o bodovima za prvu parcijalu...
      else if(id==3)
    return (
      <ScrollView style={style.container}>
        <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>
      </ScrollView>
      )
      
    //Izvjestaj o bodovima za drugu parcijalu...
      else if(id==4)
    return (
      <ScrollView style={style.container}>
        <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>
      </ScrollView>
      )
      
    //Izvjestaj o bodovima za zavrsni...
      else if(id==5)
    return (
      <ScrollView style={style.container}>
        <Text style={style.text}>Izvještaj: {title}{"\n"}</Text>
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