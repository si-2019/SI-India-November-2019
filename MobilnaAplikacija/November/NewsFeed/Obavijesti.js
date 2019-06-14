import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import Obavijest from './Obavijest';
import PropTypes from 'prop-types';
//import axios from "axios";

const API_BASE_URL= 'https://si2019november.herokuapp.com';
class Obavijesti extends Component {
  state={
    obavijesti:[]
  }
  componentWillMount(){
   
    fetch(API_BASE_URL+`/November/novosti?StudentId=3`).then(res=>res.json())
    .then(response => {
      this.setState({
        obavijesti: response
      })
    }).catch(e=>{
      this.setState({
        obavijesti:obavijestiMOCK
      });
    })
  }
  
  render() {
    let obavijesti=this.state.obavijesti.map((obavijest, index)=>{
      return <Obavijest key={index} naziv={obavijest.naziv} tekst= {obavijest.tekst}/>
    });

    return obavijesti;
    
  }
}
Obavijesti.propTypes={
  id:PropTypes.number.isRequired
}
const obavijestiMOCK=[{naziv:"ObavijestIZAPP",tekst:"Obavijest1 tekst"},
    {naziv:"Obavijest2",tekst:"Lorem ipsum dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."},
    {naziv:"Obavijest3",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest4",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest5",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest6",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest7",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest8",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest9",tekst:"Lorem ipsum dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."}]
export default Obavijesti;