    
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import moment, { isMoment } from 'moment'
import {Agenda} from 'react-native-calendars';
let obaveze= [{ naziv: 'Zadaca 3', predmet: 'Administracija računarskih mreža', tip: 'zadaća', datum: "15.6.2019. 10:30", },
{ naziv: 'Zadaca 2', predmet: 'Osnove računarskih mreža', tip: 'zadaća', datum: "25.5.2019. 11:00", },
{ naziv: 'Laboratorijska vježba 7', predmet: 'Administracija Računarskih mreža', tip: 'lab', datum: "20.6.2019. 10:30", },
{ naziv: 'Predavanje 8', predmet: 'Vještačka inteligencija', tip: 'predavanje', datum: "28.5.2019. 10:30", }]
export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        onCalendarToggled={(calendarOpened) => {
            console.log(calendarOpened)
            let day=moment();
    let godina=date=day.format('YYYY')
    let i=0;
      let niz=[];
      let date;
      obaveze.map(function(obaveza){
        date=moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY')
        puniDatum=moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')
        if(date==godina){
   //       if(i==0){ this.state.items[day.year+'-'+day.month+'-'+dan]=[]
   //       i++;}
   if (this.state.items[puniDatum]==undefined) {
    this.state.items[puniDatum] = [];
    
  }
        this.state.items[puniDatum].push({name:obaveza.naziv});
      }})
        }}
    //    selected={'2017-05-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
     //   if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
     //   }
      }
      
    let godina=day.year
    let i=0;
      let niz=[];
      let date;
      obaveze.map((obaveza)=>{
        date=moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY')
        puniDatum=moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')
        if(date==godina){
   //       if(i==0){ this.state.items[day.year+'-'+day.month+'-'+dan]=[]
   //       i++;}
   
        this.state.items[puniDatum].push({naziv:obaveza.naziv, tip: obaveza.tip, datum: obaveza.datum, predmet: obaveza.predmet});
      }})
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 2000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: 100}]}><Text>{item.predmet}</Text>
      <Text>{item.naziv}</Text>
      <Text>{item.tip}</Text>
      <Text>{item.datum}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Nema obaveza!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});