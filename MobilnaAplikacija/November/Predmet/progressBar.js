import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import AnimatedBar from "react-native-progress-bar-animated";

const ProgressBar = (props) => {
    state = {
        bodoviZadace: 0,
        bodoviIspiti: 0
      };
      zbirBodovaPoNajboljemRezultatu = (ispiti) =>
      {
      prviParc=-1;
      drugiParc=-1;
      integralno=-1;
      ispiti.map((ispit, index) => {
        if (prviParc<ispit.bodovi && ispit.naziv=="Prvi parcijalni") {
            prviParc=ispit.bodovi
        }
        if (drugiParc<ispit.bodovi && ispit.naziv=="Drugi parcijalni") {
            drugiParc=ispit.bodovi
        }
        if (integralno<ispit.bodovi && ispit.naziv=="Integralni") {
            integralno=ispit.bodovi
        }

      })
      if(prviParc==-1) {
          prviParc=0
      }
      if(drugiParc==-1) {
          drugiParc=0
      }
      if(integralno!=-1) {
          this.state.bodoviIspiti = integralno
      }
      else {
          this.state.bodoviIspiti = prviParc + drugiParc
      }
    } 
   
    return (
        <View style={styles.text1}>
            {props.zadace.map((zadaca, index) => {
                    this.state.bodoviZadace = this.state.bodoviZadace + zadaca.bodovi
            })}
            {this.zbirBodovaPoNajboljemRezultatu(props.ispiti)}
            <Text style= {styles.text1}>Osvojili ste: {this.state.bodoviZadace+this.state.bodoviIspiti} </Text>
            <ProgressBarAnimated
            {...styles.progressCustomStyles}
            width= {Dimensions.get('screen').width - 30}
            value={this.state.bodoviZadace+this.state.bodoviIspiti}            
            backgroundColorOnComplete="green"
          >
          </ProgressBarAnimated>
          
        </View>
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
   text1: {
    textAlign: 'center', 
    fontWeight: 'bold',
    margin: 10
   },
   progressbar: {
    textAlign: 'center'
   },
   progressCustomStyles: {
    backgroundColor: 'green', 
    borderRadius: 1,
    height: 30,
    borderColor: 'black',
    marginLeft: '10%',
    marginRight: '10%'
  }
  });