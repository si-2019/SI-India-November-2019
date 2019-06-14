import React, { Component } from 'react';

import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking, Button, TextInput } from 'react-native';
import { SubjectsList } from './SubjectsList';
import { Divider } from 'react-native-elements';
import Obavijesti from './NewsFeed/Obavijesti';
import { NavigationActions } from 'react-navigation';

export default class login2 extends Component {

  constructor(props)
  {
      super(props);
     
  }
   
  state = {
      email: '',
      password: '',
      logovan: false
    
  }

  login()
  {
      this.state.logovan = true;
      global.logovan = true;
      global.idStudenta = 1;
      global.token = "blabla";
      this.forceUpdate()
      this.props.navigation.navigate("Screen1", 1);//Šalje na dashboard
      //OVDJE UBACITI POZIV ZA LOGIN I AKO JE USPJEŠAN POSTAVITI OVE GORE GLOBALNE VARIJABLE NA ODGOVARAJUĆE VRIJEDNOSTI I POZVATI NAVIGATORSKU FUNKCIJU
      //KOJA KORISNIKA ŠALJE NA DASHBOARD.
  }

  logout()
  {
     
      global.logovan = false
      this.state.logovan = false
      //UBACITI SERVIS ZA LOGOUT AKO TAKVOG SERVISA UOPŠTE BUDE
      this.forceUpdate()
  }

    render() {
      if(global.logovan == true)
      {
          return(
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={
                      () => this.logout()
                  }>
                  <Text style={styles.submitButtonText}> Odjavi se </Text>
               </TouchableOpacity>
          );
      }
      else
      {
          return (
            <ScrollView>
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
                                secureTextEntry={true}
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
                    
                    </View>
                </View>
                </ScrollView>
          );
      }
  }
}

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
submitButton: {
    backgroundColor: '#195dc4',
    padding: 10,
    margin: 15,
    height: 40,
},
submitButtonText:{
    color: 'white',
    textAlign:'center'
},
tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
},
navigationFilename: {
    marginTop: 5,
},
helpContainer: {
    marginTop: 15,
    alignItems: 'center',
},
bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
},
helpLink: {
    paddingVertical: 15,
},
helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
},
buttonChoose: {
    backgroundColor: '#2097F3', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginLeft: '8%',
    marginRight: '8%'
},
dugmeTekst: {
      color: '#ffffff',
      fontWeight: 'bold',
},

});
