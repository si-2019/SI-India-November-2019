import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Obavijest from './Obavijest';
import PropTypes from 'prop-types';
//import axios from "axios";
class Obavijesti extends Component {
  state={
    obavijesti:[]
  }
  componentDidMount(){
    /*

    // Nakon implementacije backenda.
    axios.get("urlapi-a kada urade hehe ? id="+this.props.id).then(response=>{
        this.setState({obavijesti=response.data});
        console.log("Dodane obavijesti");
    })
    */
   obavijesti=[{naziv:"Obavijest1",tekst:"Obavijest1 tekst"},
   {naziv:"Obavijest2",tekst:"Obavijest2 tekst"},
   {naziv:"Obavijest3",tekst:"Obavijest3 tekst"}];
  }
  render() {
    return this.state.obavijesti.map(obavijest=>{
          return <Obavijest naziv={obavijest.naziv} tekst= {obavijest.tekst}/>
        })
    
  }
}
Obavijesti.propTypes={
  id:PropTypes.number.isRequired
}
export default Obavijesti;