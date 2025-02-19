import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Animated, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/AppNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (

    <>
    <StatusBar barStyle="light-content" />
    <AppNavigator />
    </>
 
);
}


