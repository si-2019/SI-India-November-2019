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
         <TouchableOpacity onPress={() => this.props.navigation.navigate("odslusaniPredmeti", 1)}>
            <Text style={{textDecorationLine: 'underline'}}>
                Odslušani predmeti
            </Text>
         </TouchableOpacity>
         <View style={styles.notificationsContainer}>
             <Obavijesti id={1}/>
         </View>
          <View style={styles.Down}>
              <TouchableOpacity activeOpacity = { .5 } onPress={ ()=>{ Linking.openURL('https://e5.onthehub.com/WebStore/Security/Signin.aspx?ws=f7e15a22-e060-e211-a88c-f04da23e67f4')}}>
                  <Image source={require('../assets/DreamSpark.png')} style = {styles.Icon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .5 } onPress={ ()=>{ Linking.openURL('https://mail.etf.unsa.ba')}}>
                <Image source={require('../assets/icons/Zimbra.png')} style = {styles.Icon} />
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
    justifyContent: 'center'
  },
  divider: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  notificationsContainer: {
    marginTop: 30,
  },
  Icon: {
    width: 55,
    height: 55
  },
  Down: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: 0
  }
});
