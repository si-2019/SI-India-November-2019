
import React from 'react';
//import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import {Alert,Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import moment from 'moment';
let inicijalni ={ispiti_info:[]} 
let notifikacije = true;
class AktivniIspiti extends React.Component {
    constructor(props){
      super(props);
      this.state = inicijalni
      inicijalizovanjeIspita=()=>{
        this.setState(inicijalni)
      }
    }
    promijeniTekstButtona = i => {
      this.setState(state => {
        const list = state.ispiti_info.map((item, j) => {
          if (j === i) {
            if(item.prijavaTekst==='Prijavi')
              item.prijavaTekst='Odjavi'
              else 
              item.prijavaTekst='Prijavi'
              return item;
          } else {
            return item;
          }
        });
  
        return {
          list,
        };
      });
    };
  
    render() {
     
        let ispiti = [{id: 0, predmet: "Vjestacka inteligencija", tip: "Prvi parcijalni", datum: "10.2.2019. 13:00", aktivan:1, prijavljen: 1, popunjen:0},
       {id:1, predmet: "Organizacija softverskog projekta", tip: "Drugi parcijalni", datum: "13.6.2019. 18:00", aktivan:1, prijavljen: 0, popunjen:0},
       {id:2, predmet: "Softverski inzenjering", tip: "Prvi parcijalni", datum: "15.6.2019. 10:30", aktivan:0, prijavljen: 1, popunjen:0},
       {id:3, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 0, popunjen:0},
       {id:4, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 1, popunjen:0}];
       
       let k=0;
       ispiti.map((ispit)=>{
         let porukaa;
         if(ispit.prijavljen) porukaa='Odjavi'
         else porukaa='Prijavi'
         inicijalni.ispiti_info[k]={ind:k, id:ispit.id,  prijavaTekst: porukaa}
         k++;
       })
      this.inicijalizovanjeIspita;
      let j, greska;
       ispisAktivnihIspita = ispiti.map((ispit)=>{
        const dateLimit = moment(ispit.datum, 'DD.MM.YYYY hh:mm');
        const now = moment();
        
              if(ispit.aktivan && dateLimit.isValid() && !now.isAfter(dateLimit)){
        return (
          
          <View style={{ flexDirection: 'row' }}>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.predmet}</Text></View>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.tip}</Text></View>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.datum}</Text></View>
              <View style={styles.elementi_tabele}>
              <TouchableOpacity  >
            <Text style={[styles.elementi_tabele_tekst, {color:'blue'}]} onPress={()=>{
              j=ispiti.indexOf(ispit);
              if(ispit.prijavljen){
                  ispiti[j].prijavljen=0;
                  console.log(j)
                  this.promijeniTekstButtona(j);               
                  alert('Ispit odjavljen!');             
              }
            else{
                ispiti[j].prijavljen=1;   
                console.log(j)
                this.promijeniTekstButtona(j);                
                alert('Ispit prijavljen!');
            }
             
            }} >{this.state.ispiti_info[ispiti.indexOf(ispit)].prijavaTekst}</Text>
          </TouchableOpacity></View>
             {/* <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst} onPress={this.handleClick} color = 'blue'>{prijava}</Text></View>
            <Button onPress={this.handleClick} title={prijava} type="clear" />*/}
          </View>
          
      );
      
      
    }
    
       })
       
        return (
          
            <View style={styles.container}>
            <View style={styles.header_container}>
              <View style={styles.header}><Text style={styles.header_tekst}>Predmet</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Tip</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Datum</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Prijava</Text></View>
            </View>
            <View>
                {ispisAktivnihIspita}
            </View>
            </View>
        );
    }
  }
  class PrijavljeniIspiti extends React.Component {
    constructor(props){
      super(props);
      this.state = inicijalni
      inicijalizovanjeIspita=()=>{
        this.setState(inicijalni)
        
      }
      l=0;
    }
    OdjaviIspitIzPrijavljenih= i => {
      this.setState(state => {
        const list = state.ispiti_info.filter((item, j) => i !== j);
  
        return {
          list,
        };
      });
    };
    render() {
      let ispiti = [{id: 0, predmet: "Vjestacka inteligencija", tip: "Prvi parcijalni", datum: "10.2.2019. 13:00", aktivan:1, prijavljen: 1, popunjen:0},
      {id:1, predmet: "Organizacija softverskog projekta", tip: "Drugi parcijalni", datum: "13.6.2019. 18:00", aktivan:1, prijavljen: 0, popunjen:0},
      {id:2, predmet: "Softverski inzenjering", tip: "Prvi parcijalni", datum: "15.6.2019. 10:30", aktivan:0, prijavljen: 1, popunjen:0},
      {id:3, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 0, popunjen:0},
      {id:4, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 1, popunjen:0}];
       
       let k=0;
       ispiti.map((ispit)=>{
         let porukaa;
         if(ispit.prijavljen) porukaa='Odjavi'
         else porukaa='Prijavi'
         inicijalni.ispiti_info[k]={ind:k, id:ispit.id,  prijavaTekst: porukaa}
         k++;
       })
       this.inicijalizovanjeIspita;
  
      let j;
       ispisAktivnihIspita = ispiti.map((ispit)=>{
        const dateLimit = moment(ispit.datum, 'DD.MM.YYYY hh:mm');
        const now = moment();
        
              if(ispit.aktivan && dateLimit.isValid() && !now.isAfter(dateLimit) && ispit.prijavljen){
        return (
          
          <View style={{ flexDirection: 'row' }}>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.predmet}</Text></View>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.tip}</Text></View>
              <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.datum}</Text></View>
              <View style={styles.elementi_tabele}>
              <TouchableOpacity  >
            <Text style={[styles.elementi_tabele_tekst, {color:'blue'}]} onPress={()=>{
              j=ispiti.indexOf(ispit);
              ispiti[j].prijavljen=0;
              console.log(j)
              this.OdjaviIspitIzPrijavljenih(j)               
              alert('Ispit odjavljen!');
             
            }} >{this.state.ispiti_info[ispiti.indexOf(ispit)].prijavaTekst}</Text>
          </TouchableOpacity></View>
             {/* <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst} onPress={this.handleClick} color = 'blue'>{prijava}</Text></View>
            <Button onPress={this.handleClick} title={prijava} type="clear" />*/}
          </View>
          
      );
      
      
    }
    
       })
       
        return (
          
            <View style={styles.container}>
            <View style={styles.header_container}>
              <View style={styles.header}><Text style={styles.header_tekst}>Predmet</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Tip</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Datum</Text></View>
              <View style={styles.header}><Text style={styles.header_tekst}>Prijava</Text></View>
            </View>
            <View>
                {ispisAktivnihIspita}
            </View>
            </View>
        );
    }
  }
class SviPrijavljeniIspiti extends React.Component {
  constructor(props){
    super(props);
    this.state = inicijalni
    inicijalizovanjeIspita=()=>{
      this.setState(inicijalni)
      
    }
    l=0;
  }
  OdjaviIspitIzPrijavljenih= i => {
    this.setState(state => {
      const list = state.ispiti_info.filter((item, j) => i !== j);

      return {
        list,
      };
    });
  };
  promijeniTekstButtona = i => {
    this.setState(state => {
      const list = state.ispiti_info.map((item, j) => {
        if (j === i) {
          if(item.prijavaTekst==='Prijavi')
            item.prijavaTekst='Odjavi'
            else 
            item.prijavaTekst='Prijavi'
            return item;
        } else {
          return item;
        }
      });

      return {
        list,
      };
    });
  };

  render() {     
      let ispiti = [{id: 0, predmet: "Vjestacka inteligencija", tip: "Prvi parcijalni", datum: "10.2.2019. 13:00", aktivan:1, prijavljen: 1, popunjen:0},
     {id:1, predmet: "Organizacija softverskog projekta", tip: "Drugi parcijalni", datum: "13.6.2019. 18:00", aktivan:1, prijavljen: 0, popunjen:0},
     {id:2, predmet: "Softverski inzenjering", tip: "Prvi parcijalni", datum: "15.6.2019. 10:30", aktivan:0, prijavljen: 1, popunjen:0},
     {id:3, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 0, popunjen:0},
     {id:4, predmet: "Projektovanje informacionih sistema", tip: "Usmeni", datum: "16.6.2019. 11:00", aktivan:1, prijavljen: 1, popunjen:0}];
     
     let k=0;
     ispiti.map((ispit)=>{
       let porukaa;
       if(ispit.prijavljen) porukaa='Odjavi'
       else porukaa='Prijavi'
       inicijalni.ispiti_info[k]={ind:k, id:ispit.id,  prijavaTekst: porukaa}
       k++;
     })
     this.inicijalizovanjeIspita;

    let j;
     ispisAktivnihIspita = ispiti.map((ispit)=>{
      
      if(ispit.prijavljen){
      return (
        
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.predmet}</Text></View>
            <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.tip}</Text></View>
            <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst}>{ispit.datum}</Text></View>
            
          
           {/* <View style={styles.elementi_tabele}><Text style={styles.elementi_tabele_tekst} onPress={this.handleClick} color = 'blue'>{prijava}</Text></View>
          <Button onPress={this.handleClick} title={prijava} type="clear" />*/}
        </View>
        
    );
    
    
  }
  
     })
     
      return (
        
          <View style={styles.container}>
          <View style={styles.header_container}>
            <View style={styles.header}><Text style={styles.header_tekst}>Predmet</Text></View>
            <View style={styles.header}><Text style={styles.header_tekst}>Tip</Text></View>
            <View style={styles.header}><Text style={styles.header_tekst}>Datum</Text></View>
          </View>
          <View>
              {ispisAktivnihIspita}
          </View>
          </View>
      );
  }
}
const TabScreen = createMaterialTopTabNavigator(
  {
    'Aktivni ispiti': AktivniIspiti,
  'Prijavljeni ispiti': PrijavljeniIspiti,
  'Svi prijavljeni ispiti' : SviPrijavljeniIspiti,
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#376ff2',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        textAlign: 'center',
        

      },
      indicatorStyle: {
        borderBottomColor: '#376ff2',
        borderBottomWidth: 2,
      },
    },
  }
);


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection: 'column'
  },
  elementi_tabele_tekst:{
    textAlign: 'center',
    paddingTop:5, 
  },
  elementi_tabele:{ 
    flex: 1, 
    alignItems:'center' 
},
  header_tekst:{
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    top: '20%',
    bottom: '20%'
  },
  header_container:{
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingTop: 10,
    paddingBottom: 10
  },
  header:{
    flex: 1,
    textAlign: 'center'
  }, 
});
export default createAppContainer(TabScreen);
