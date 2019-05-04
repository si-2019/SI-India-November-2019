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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image source={require('../assets/logo.jpg')}
                               style={styles.welcomeImage}/>
                    </View>
                    <Text style={styles.developmentModeText}>
                        Dobrodošli na oficijelnu stranicu Elektrotehničkog fakulteta, Sarajevo
                    </Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder=" Korisničko ime"
                               placeholderTextColor="#000000"
                               autoCapitalize="none"
                               onChangeText={this.handleUserName}/>
                    <TextInput style={styles.input}
                               underlineColorAndroid="transparent"
                               placeholder=" Lozinka"
                               placeholderTextColor="#000000"
                               autoCapitalize="none"
                               onChangeText={this.handlePassword}/>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style={styles.submitButtonText}> Prijavi se </Text>
                    </TouchableOpacity>
                    <View style={styles.down}>
                        <Text style = {styles.footer}>
                            {'\u00A9'} November-India, 2019
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default  App
const styles = StyleSheet.create({
    footer: {
        color: '#fff',
        paddingTop:7.5,
        textAlign:'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1
    },
    developmentModeText: {
        marginBottom: 20,
        color: '#000000',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 25,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    down: {
        width: '100%',
        height: 40,
        backgroundColor: '#195dc4',
        textAlign:'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },