import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ProgressBar = (props) => {
    state = {
        bodoviZadace: 0,
        bodoviIspiti: 0
      };
    return (
        <View>
            {props.zadace.map((zadaca, index) => {
                    this.state.bodoviZadace = this.state.bodoviZadace + zadaca.bodovi
            })}
            {props.ispiti.map((ispit, index) => {
                    this.state.bodoviIspiti = this.state.bodoviIspiti + ispit.bodovi
            })}
            <Text style= {styles.text1}>Osvojili ste: {this.state.bodoviZadace} i {this.state.bodoviIspiti} </Text>
        </View>
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
   text1: {
    textAlign: 'center', 
    fontWeight: 'bold',
   }
  });