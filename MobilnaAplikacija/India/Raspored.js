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
let inicijalni={
    obaveze :[{ naziv: 'Zadaca 3', predmet: 'Administracija računarskih mreža', tip: 'zadaća', datum: "10.6.2019. 10:30", zabiljeske: ['Amina', 'Aminaa', 'Amina'] },
    { naziv: 'Zadaca 4', predmet: 'Administracija računarskih mreža', tip: 'Završni ispit', datum: "15.7.2019. 10:30", zabiljeske: [] },
    { naziv: 'Zadaca 2', predmet: 'Administracija računarskih mreža', tip: 'zadaća', datum: "25.6.2019. 10:30", zabiljeske: [] },
    { naziv: 'Zadaca 2', predmet: 'Osnove računarskih mreža', tip: 'zadaća', datum: "25.6.2019. 11:00", zabiljeske: [] },
    { naziv: 'Laboratorijska vježba 7', predmet: 'Administracija Računarskih mreža', tip: 'lab', datum: "20.6.2019. 10:30", zabiljeske: [] },
    { naziv: 'Predavanje 8', predmet: 'Vještačka inteligencija', tip: 'predavanje', datum: "28.6.2019. 10:30", zabiljeske: [] }],
    markirani: {},
    items: {},
    text: ''
}
const boje = ['#7DFF00', '#BEFF00', '#D5FF00', '#E1FF00', '#F0FF00', '#FFF700', "#FFE700", "#FFD800",
    "#FFD000", '#FFB900', '#FFB100', '#FFA200', '#FF9200', '#FF6400', '#FF4D00', '#FF0000'] //27
export default class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        initialState = {
            [moment().format('YYYY-MM-DD')]: { dots: {} }
        }
        this.state = inicijalni
        inicijalizovanjeIspita = () => {
            this.setState(inicijalni)
        }
    }

    render() {
        this.inicijalizovanjeIspita;
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
                    selectedDayBackgroundColor: '#376ff2',
                    todayTextColor:'black'
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
            this.state.obaveze.map((obaveza) => {
                date = moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY')
                puniDatum = moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')
                //    console.log("usporedba "+obaveza.naziv+puniDatum+ "*"+date+"*"+monthDate+"*"+(date==monthDate))
                if (date == monthDate) {
                    //       if(i==0){ this.state.items[day.year+'-'+day.month+'-'+dan]=[]
                    //       i++;}
                    let da = 0, boja;
                    this.state.items[puniDatum].push({ key: puniDatum, naziv: obaveza.naziv, tip: obaveza.tip, datum: obaveza.datum, predmet: obaveza.predmet, zabiljeske: obaveza.zabiljeske });
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
                        let zadacaTacka, infoTacka;
                        if ((obaveza.tip == 'zadaća' || obaveza.tip == 'zadaca' || obaveza.tip == 'Zadaca'))
                            zadacaTacka = { key: obaveza.datum, color: boja };
                        if (obaveza.zabiljeske && obaveza.zabiljeske.length) {
                            infoTacka = { color: 'black' };
                            if (!updatedMarkedDates[puniDatum]) updatedMarkedDates[puniDatum] = { dots: [zadacaTacka, infoTacka] }
                            else {
                                updatedMarkedDates[puniDatum].dots.push(zadacaTacka)
                                updatedMarkedDates[puniDatum].dots.push(infoTacka)
                            }
                        }
                        else {
                            if (!updatedMarkedDates[puniDatum]) updatedMarkedDates[puniDatum] = { dots: [zadacaTacka] }
                            else updatedMarkedDates[puniDatum].dots.push(zadacaTacka)
                        }
                    }

                }
            })
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                obaveze:this.state.obaveze,
                markirani: updatedMarkedDates,
                items: newItems,
                text:this.state.text
            });
           // console.log(this.state)
        }, 2000);
    })

    renderItem(item) {
        renderZabiljeske = item.zabiljeske.map((zabilj, ind) => {
            return (
                
                <View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 9 / 10, alignItems: 'center', borderColor:'white',borderRadius:10, borderWidth:2 }}><Text style={{ textAlign: 'center', fontFamily:'System'}}>{zabilj}</Text></View>
                    <View style={{ flex: 1 / 10, alignItems: 'center', justifyContent: 'center' }}><TouchableOpacity style={{ backgroundColor: '#376ff2', borderRadius:10}}>
                        <Text style={{ color: '#fafafa', fontWeight: 'bold', textAlign: 'center'}} onPress={() => {
                        /*    { let kopijaItema=this.state.items
                             let kopijaObaveza=this.state.obaveze
                             
                                  let i=0;
                                // console.log(kopijaState.items) 
                                kopijaItema.map((obaveza)=>{
                                    
                                  if(obaveza.naziv==item.naziv && obaveza.datum==item.naziv && obaveza.key==item.key && obaveza.zabiljeske==item.zabiljeske){
                                      kopijaZabilješki=obaveza.zabiljeske.filter(function(zabiljeska, indexic){
                                          return indexic!=ind
                                      })
                                      kopijaItema[moment(obaveza.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')].zabiljeske=kopijaZabilješki
                                  }
                                i++;
                              })
                              kopijaObaveza.map((obaveza, indexObaveze)=>{
                                if(obaveza.naziv==item.naziv && obaveza.datum==item.naziv && obaveza.zabiljeske==item.zabiljeske){
                                    kopijaZabilješki=obaveza.zabiljeske.filter(function(zabiljeska, indexic){
                                        return indexic!=ind
                                    })
                                    kopijaObaveza[indexObaveze].zabiljeske=kopijaZabilješki
                                }
                              i++;
                            })
                              this.setState({obaveze:kopijaObaveza, markirani: this.state.markirani, items: kopijaItema, text: this.state.text });
                              alert('obrisano') ;}*/
                        }}> X </Text>

                    </TouchableOpacity></View>
                </View>
                <View style={{height:2}}></View>
                </View>
            )

        })
        return (
            <View style={[styles.item]}>
                <Text style={{ fontFamily:'System', fontWeight:"bold", fontSize:18 }}>{moment(item.datum, 'DD.MM.YYYY hh:mm').format('hh:mm')}</Text>
                <Text> <Text style={{ fontWeight: "bold"  , fontFamily:'System', fontSize:18}}>{item.naziv}</Text></Text>
                <Text style={{ fontFamily:'System', fontSize:14.5}}>{item.predmet}</Text>
                <Text style={{ fontFamily:'System', fontSize:14.5}}>{item.tip}</Text>
                <Text style={{ fontFamily:'System',}}>Zabilješke:</Text>
                <View style={{backgroundColor:'#f4f4f4', borderRadius:5, borderColor:'white', padding:2}}>
                {renderZabiljeske}
                </View>
                <Text style={{ height: 2 }}></Text>
                <TextInput
                    style={{ height: 30, borderWidth: 1, borderRadius:10, borderColor: '#376ff2', fontFamily:'System', paddingLeft:1}}
                    editable={true}
                    multiline={true}
                    placeholder=' Unesite zabilješku'
                    onChangeText={(tekst) => this.setState({obaveze:this.state.obaveze, markirani: this.state.markirani, items: this.state.items, text: tekst })}
              //      value={this.state.text}
                />
                <Text style={{ height: 2 }}></Text>
                <TouchableOpacity style={{borderRadius:10,backgroundColor: '#376ff2' }}>
                    <Text style={[{height:30, paddingTop:5,  justifyContent: 'center', fontFamily: 'System', textAlign: 'center', color: '#fafafa', fontWeight:'bold' }]} onPress={() => {
                        if (this.state.text != undefined && this.state.text != '' && this.state.text != ' ') {
                            let updatedMarkedDates = this.state.items;
                            let i = 0;
                            updatedMarkedDates[moment(item.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')].map((it) => {
                                if (it.naziv == item.naziv && it.datum == item.datum && it.predmet == item.predmet && it.tip == item.tip)
                                    updatedMarkedDates[moment(item.datum, 'DD.MM.YYYY hh:mm').format('YYYY-MM-DD')][i].zabiljeske.push(this.state.text)
                                i++
                            })
                            this.setState({obaveze:this.state.obaveze, markirani: this.state.markirani, items: updatedMarkedDates, text: '' })
                           // console.log(this.state)
                            alert('Bilješka uspješno dodana!');
                            this.forceUpdate()
                        }

                        else {
                            alert('Greška! Bilješka nije dodana!');

                            this.setState({obaveze:this.state.obaveze, markirani: this.state.markirani, items: this.state.items, text: '' })

                        }

                    }}>Dodaj</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text style={{backgroundColor:'white'}}>  Nema obaveza!</Text></View>
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
        marginTop: 17,
        borderRadius:5
    },
    emptyDate: {
        marginTop: 17,
        marginRight: 10,
        height: 7.5,
        flex: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:5
    }
});