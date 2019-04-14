import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Slika from './Slika';
import PodaciOStudentu from './PodaciOStudentu';

const ProfilStudenta = (props) => {
    return (
    <ScrollView>
        <Slika />
        <PodaciOStudentu/>
    </ScrollView>
 )
}
export default ProfilStudenta
