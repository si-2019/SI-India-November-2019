import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { SubjectsList } from './SubjectsList';
import { Divider } from 'react-native-elements';
import Obavijesti from './NewsFeed/Obavijesti';
export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
         <View style={styles.subjectsContainer}>
           <SubjectsList navigation={this.props.navigation}/>
         </View>
         <Divider style={styles.divider} />
         <View style={styles.notificationsContainer}>
             <Obavijesti id={1}/>
         </View>
          <View style={styles.Down}>
              <TouchableOpacity activeOpacity = { .5 } onPress={ ()=>{ Linking.openURL('https://e5.onthehub.com/WebStore/Security/Signin.aspx?ws=f7e15a22-e060-e211-a88c-f04da23e67f4')}}>
                  <Image source={require('../assets/DreamSpark.png')} style = {styles.DreamSpark} />
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  subjectsContainer: {
    height: '30%',
    // backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  divider: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  notificationsContainer: {
  //  height: '60%',
    marginTop: 30,
    // backgroundColor: 'powderblue',
    //justifyContent: 'center'
  },
    DreamSpark: {
        bottom:0,
        paddingLeft:0,
        position:'absolute',
        width:55,
        height:55
    },
    Down:{
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
});
