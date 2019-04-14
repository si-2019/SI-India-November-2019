import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

export class SubjectsList extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         subjects: []
      }
    }

    render() {
        return (
            <View>
               <Text>SubjectsList Component!</Text>
            </View>
        );
    }
}