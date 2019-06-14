import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { ListItem } from 'react-native-elements';

import Zavrsni from './Zavrsni';

const API_BASE_URL= 'https://si2019november.herokuapp.com';
export class SubjectsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }

  componentWillMount() {
    fetch(API_BASE_URL+`/November/predmeti?StudentId=3`).then( res => res.json()).
    then(response=>{
      this.setState({
        subjects: response
      })
    }).catch(e =>{
      
      this.setState({
        subjects: getSubjects
      })
    })
  }
  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.state.subjects}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => this.props.navigation.navigate("Predmet", item)}
              chevron
            />
          )}
        />
        <TouchableOpacity>
          <Text style={styles.iteme}  onPress={() => this.props.navigation.navigate("Zavrsni",1)}>Završni rad</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const getSubjects = [
  {
    id: 1,
    title: "ARM",
    profesor: "Profesor ARM",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 3 },
      { naziv: "Zadaća 2", bodovi: 4 },
      { naziv: "Zadaća 3",bodovi: 2 },
      { naziv : "Zadaća 4", bodovi : 5}
    ],
    prisustvo:10
  },
  {
    id: 2,
    title: "Projektovanje informacionih sistema",
    profesor: "Profesor PIS",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 5 },
      { naziv: "Zadaća 2", bodovi: 4 },
      { naziv: "Zadaća 3",bodovi: 3 }
    ],
    prisustvo:10
  },
  {
    id: 3,
    title: "Softver inženjering",
    profesor: "Profesor SI",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 5 },
      { naziv: "Zadaća 2", bodovi: 8 },
      { naziv: "Zadaća 3",bodovi: 10 },
      { naziv : "Zadaća 4", bodovi : 10}
    ],
    prisustvo:10
  },
  {
    id: 4,
    title: "Vještačka inteligencija",
    profesor: "Profesor VI",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 1 },
      { naziv: "Zadaća 2", bodovi: 2 },
      { naziv: "Zadaća 3",bodovi: 2 },
      { naziv : "Zadaća 4", bodovi : 1},
      { naziv: "Zadaća 5",bodovi: 2 },
      { naziv : "Zadaća 6", bodovi : 2}
    ],
    prisustvo:10
  }

];

const styles = StyleSheet.create({
  item: {
    padding: 5,
    fontSize: 16,
    height: 32
  },
  iteme: {
    padding: 5,
    marginTop: 5,
    marginLeft: 10,
    fontSize: 17,
    height: 50
  },
});
