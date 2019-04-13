import React from 'react';

import logo from './assets/logo.jpg';
import Inputs from './inputs.js';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const App = () => {
  return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
        <Image source={require('./assets/logo.jpg')}
               style={styles.welcomeImage}/>
        </View>
          <Text style={styles.developmentModeText}>
            Dobrodošli na oficijelnu stranicu Elektrotehničkog fakulteta, Sarajevo
          </Text>
          <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = " Korisničko ime"
                     placeholderTextColor = "#000000"
                     autoCapitalize = "none"
                     onChangeText = {this.handleEmail}/>
          <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = " Lozinka"
                     placeholderTextColor = "#000000"
                     autoCapitalize = "none"
                     onChangeText = {this.handlePassword}/>
        </ScrollView>
      </View>
  )
}
export default  App

const styles = StyleSheet.create({
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
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
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
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
