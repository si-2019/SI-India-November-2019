import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Slika from './Komponente/Slika';
import PodaciOStudentu from './Komponente/PodaciOStudentu';

const ProfilStudenta = (props) => {
    return (
    <ScrollView>
        <Slika />
        <PodaciOStudentu/>
    </ScrollView>
 )
}
export default ProfilStudenta
