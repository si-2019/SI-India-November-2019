import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import moment, { isMoment, now } from 'moment'
import { Agenda } from 'react-native-calendars';
import { Button } from 'react-native-elements';
//crna tacka - imaju zabilješke
//tacke u boji - zavisno od preostalog perioda
let obaveze = [{ naziv: 'Zadaca 3', predmet: 'Administracija računarskih mreža', tip: 'zadaća', datum: "10.6.2019. 10:30", zabiljeske:[] },
{ naziv: 'Zadaca 4', predmet: 'Administracija računarskih mreža', tip: 'Završni ispit', datum: "15.7.2019. 10:30", zabiljeske:[]},
{ naziv: 'Zadaca 2', predmet: 'Administracija računarskih mreža', tip: 'zadaća', datum: "25.6.2019. 10:30", zabiljeske:[] },
{ naziv: 'Zadaca 2', predmet: 'Osnove računarskih mreža', tip: 'zadaća', datum: "25.6.2019. 11:00", zabiljeske:[]},
{ naziv: 'Laboratorijska vježba 7', predmet: 'Administracija Računarskih mreža', tip: 'lab', datum: "20.6.2019. 10:30", zabiljeske:[]},
{ naziv: 'Predavanje 8', predmet: 'Vještačka inteligencija', tip: 'predavanje', datum: "28.6.2019. 10:30", zabiljeske:[]}]
const boje = ['#7DFF00', '#BEFF00', '#D5FF00', '#E1FF00', '#F0FF00', '#FFF700', "#FFE700", "#FFD800",
    "#FFD000", '#FFB900', '#FFB100', '#FFA200', '#FF9200', '#FF6400', '#FF4D00', '#FF0000'] //27
export default class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        initialState = {
            [moment().format('YYYY-MM-DD')]: { dots: {} }
        }
        this.state = {
            markirani: {},
            items: {},
            text: ''
        };
    }

    render() {

        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                //    selected={'2017-05-16'}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}

                // markingType={'period'}
                markedDates={this.state.markirani}
                markingType={'multi-dot'}
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
            theme={{
                agendaTodayColor: '#376ff2',
                agendaKnobColor: '#376ff2',
                selectedDayBackgroundColor:'#376ff2'
              }}
            />
        );
    }

    loadItems = ((day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                //if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
                //}
            }

            let mjesec;
            if (day.month < 10) mjesec = '0' + day.month
            else mjesec = day.month
            let i = 0;
            var monthDate = day.year;

            let niz = [];
            let date;
            let updatedMarkedDates = {}
            obaveze.map((obaveza) => {
                date = moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY')
                puniDatum = moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')
                //    console.log("usporedba "+obaveza.naziv+puniDatum+ "*"+date+"*"+monthDate+"*"+(date==monthDate))
                if (date == monthDate) {
                    //       if(i==0){ this.state.items[day.year+'-'+day.month+'-'+dan]=[]
                    //       i++;}
                    let da = 0, boja;
                    this.state.items[puniDatum].push({ key: obaveza.datum, naziv: obaveza.naziv, tip: obaveza.tip, datum: obaveza.datum, predmet: obaveza.predmet, zabiljeske:obaveza.zabiljeske});
                    if (puniDatum >= moment().format('YYYY-MM-DD')) {
                        da = 1;
                        var now = moment();
                        var end = moment(puniDatum); // another date
                        var duration = moment.duration(end.diff(now));
                        var days = duration.asDays();
                        if (days > 60) boja = boje[0];
                        else if (days > 50) boja = boje[1]
                        else if (days > 40) boja = boje[2]
                        else if (days > 30) boja = boje[3]
                        else if (days > 25) boja = boje[4]
                        else if (days > 20) boja = boje[5]
                        else if (days > 15) boja = boje[6]
                        else if (days > 13) boja = boje[7]
                        else if (days > 10) boja = boje[8]
                        else if (days > 7) boja = boje[9]
                        else if (days > 5) boja = boje[10]
                        else if (days > 4) boja = boje[11]
                        else if (days > 3) boja = boje[12]
                        else if (days > 2) boja = boje[13]
                        else if (days > 1) boja = boje[14]
                        else boja = boje[15]
                    }
                    if (da) {
                        let zadacaTacka, infoTacka ;
                        if((obaveza.tip=='zadaća' || obaveza.tip=='zadaca' || obaveza.tip=='Zadaca'))
                         zadacaTacka = { key: obaveza.datum, color: boja };
                        if(obaveza.zabiljeske && obaveza.zabiljeske.length){
                         infoTacka = { color: 'black'};
                         if (!updatedMarkedDates[puniDatum]) updatedMarkedDates[puniDatum] = { dots: [zadacaTacka, infoTacka] }
                        else{ updatedMarkedDates[puniDatum].dots.push(zadacaTacka)
                            updatedMarkedDates[puniDatum].dots.push(infoTacka)}
                        }
                        else{
                        if (!updatedMarkedDates[puniDatum]) updatedMarkedDates[puniDatum] = { dots: [zadacaTacka] }
                        else updatedMarkedDates[puniDatum].dots.push(zadacaTacka)
                    }
                    }

                }
            })
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                markirani: updatedMarkedDates,
                items: newItems
            });
            console.log(this.state)
        }, 2000);
    })

    renderItem(item) {
        renderZabiljeske=item.zabiljeske.map((zabilj)=>{
                return(
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{flex: 6/7, alignItems:'center'}}><Text style={{textAlign: 'center'}}>{zabilj}</Text></View>
                        <View style={{flex: 1/7, alignItems:'center', justifyContent:'center'}}><TouchableOpacity>
                        <Text style={{backgroundColor:'#fafafa', color:'#376ff2', fontWeight:'bold', textAlign:'center', backgroundColor:'#fafafa'}} >X</Text>
                                               
                        </TouchableOpacity></View>
                    </View>
                     //onPress={()=>{
                     //       let kopijaState=this.state.items
                       //     let i=0;
                         //   kopijaState.map((obaveza)=>{
                           //     if(obaveza==item) kopijaState[i]=[];
                             //   i++;
                           // })
                           // this.setState({ markirani: this.state.markirani, items: kopijaState, text: this.state.text }) alert('obrisano')}}
                )
            
        })
        return (
            <View style={[styles.item]}>
                <Text><Text>Naziv: </Text> <Text style={{ fontWeight: "bold" }}>{item.naziv}</Text></Text>
                <Text>Predmet: {item.predmet}</Text>
                <Text>Tip: {item.tip}</Text>
                <Text>Vrijeme: {moment(item.datum, 'DD.MM.YYYY hh:mm').format('hh:mm')}</Text>
                <Text>Zabilješke:</Text>
                {renderZabiljeske}
                <TextInput
                    style={{ height: 40, borderWidth: 1, borderColor: '#fafafa' }}
                    editable={true}
                    multiline={true}
                    placeholder='Unesite zabilješku'
                    onChangeText={(tekst) => this.setState({ markirani: this.state.markirani, items: this.state.items, text: tekst })}
                   //value={this.state.text}
                />
                <Text style={{height:1}}></Text>
                <TouchableOpacity>
                    <Text style={[ {backgroundColor:'#fafafa', alignContent:'center',textAlign:'center', color: '#376ff2' }]} onPress={() => {
                        if(this.state.text!=undefined && this.state.text!='' && this.state.text!=' '){
                           let updatedMarkedDates = this.state.items;
                           let i=0;
                           updatedMarkedDates[moment(item.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')].map((it)=>{
                               if(it.naziv==item.naziv && it.datum==item.datum && it.predmet==item.predmet && it.tip==item.tip)
                               updatedMarkedDates[moment(item.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')][i].zabiljeske.push(this.state.text)
                               i++
                           })
                           this.setState({ markirani: this.state.markirani, items: updatedMarkedDates, text: '' })
                           console.log(this.state)
                           alert('Bilješka uspješno dodana!');
                           this.forceUpdate()
                        }
                    
                    else{
                        alert('Greška! Bilješka nije dodana!');
                        this.setState({ markirani: this.state.markirani, items: this.state.items, text: '' })
                        
                    }
                    
                    }}>Dodaj</Text>
                </TouchableOpacity>
            </View>
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
        flex: 1,
        paddingTop: 30
    }
});