import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
// import axios from 'axios';

export class SubjectsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }

  componentDidMount() {
    /* axios.get("http://localhost:3000/subjects")
            .then(res => {
                const newSubjects = res.data;
                this.setState({ subjects: newSubjects });
            })
            .then(error => {
                console.error(error);
            }
        ) */
    this.setState({
      subjects: getSubjects
    });
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.subjects}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={styles.item}
                onPress={() => this.props.navigation.navigate("Predmet", item)}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  _getSubjectsFromApi = async endpoint => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

const getSubjects = [
  {
    id: 1,
    title: "Organizacija softverskog projekta",
    profesor: "Profesor OSP",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 10 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 0 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 17 },
      {naziv: "Integralni", datum: "24/11/2019", bodovi: 11 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 3 },
      { naziv: "Zadaća 2", bodovi: 4 },
      { naziv: "Zadaća 3",bodovi: 2 },
      { naziv : "Zadaća 4", bodovi : 5}
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: 5,
    title: "Završni rad",
    profesor: "Profesor ZR",
    ECTS: "4",
    asistenti: "Asistent",
    ispiti: [
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 13 },
      { naziv: "Prvi parcijalni", datum: "11/11/2019", bodovi: 15 },
      { naziv: "Drugi parcijalni", datum: "24/11/2019", bodovi: 13 }
    ],
    zadace: [
      { naziv: "Zadaća 1", bodovi: 40 }
    ]
  }
];

const styles = StyleSheet.create({
  item: {
    padding: 5,
    fontSize: 16,
    height: 32
  }
});
