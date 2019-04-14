import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Glavna from './App.js';
import Druga from './Dashboard';

const Screens = StackNavigator({
   Glavna : {screen:Glavna},
    Drugi : {scree : Druga},
});
export default  Screens;