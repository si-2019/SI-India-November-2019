import React from 'react'
import {View,Text} from 'react-native';
const Ispit = (props) => {
    const {naziv,datum,bodovi}=props;
  return (
    <Text>{naziv}({datum}): {bodovi}</Text>
  )
}

export default Ispit;