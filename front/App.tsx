
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Router from './page/shared/Router';


const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

export default App

