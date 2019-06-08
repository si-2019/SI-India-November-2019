import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import Obavijest from './Obavijest';
import PropTypes from 'prop-types';
//import axios from "axios";
class Obavijesti extends Component {
  state={
    obavijesti:[]
  }
  componentWillMount(){
    /*
    // Nakon implementacije backenda.
    axios.get("urlapi-a kada urade hehe ? id="+this.props.id).then(response=>{
        this.setState({obavijesti=response.data});
        console.log("Dodane obavijesti");
    })
    key  zamijenjeniti sa uid !
    */
   this.state.obavijesti=[{naziv:"Obavijest1",tekst:"Obavijest1 tekst"},
    {naziv:"Obavijest2",tekst:"Lorem ipsum dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."},
    {naziv:"Obavijest3",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest4",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest5",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest6",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest7",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest8",tekst:"Obavijest3 tekst"},
    {naziv:"Obavijest9",tekst:"Lorem ipsum dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus Laoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibusLaoreet id donec ultrices tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Dui sapien eget mi proin sed libero enim sed faucibus. Eros donec ac odio tempor orci dapibus. Senectus et netus et malesuada fames. Auctor elit sed vulputate mi sit amet."}]
  }
  
  render() {
    let obavijesti=this.state.obavijesti.map(obavijest=>{
      return <Obavijest key={obavijest.naziv} naziv={obavijest.naziv} tekst= {obavijest.tekst}/>
    });

    return obavijesti;
    
  }
}
Obavijesti.propTypes={
  id:PropTypes.number.isRequired
}
export default Obavijesti;