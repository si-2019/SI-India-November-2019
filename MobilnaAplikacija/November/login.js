import React, { Component } from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import StackNavigator from 'react-navigation';
import axios from 'axios'; /*Nakon implementacije backenda*/
class App extends React.Component {
    /*var token = 'temp';*/ /*Za validaciju*/
    state = {
        email: '',
        password: ''
    }
    handleUserName = (text) => {
        this.setState({email: text})
    }
    handlePassword = (text) => {
        this.setState({password: text})
    }
    login = (email, pass) => {
        if (email.length !== 0 && pass.length!== 0) {

            /*Dummy podaci*/
            if(email !== 'student' || pass!=='student') Alert.alert('Greška!','Netačni podaci!');

            /*Ukoliko je ok validacija*/
            else {
                /*Nakon implementacije backenda.
                ISKORISTITI varijablu token za ovo
                axios.get("urlapi-a kada urade hehe ? id="+this.props.id).then(response=>{
                  this.setState({obavijesti=response.data});

                })
                key  zamijenjeniti sa uid !
                */
                Alert.alert('OK','Treba se prebaciti na Home Page ali nezz xd');
            }
        }
        else if(email.length === 0 || pass.length === 0) Alert.alert('Greška!','Molimo unesite oba podatka!')
    }