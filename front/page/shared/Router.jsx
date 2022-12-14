import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Introduce, Login, Signup, FindId, FindPassword } from '../login';
import { Main } from "../Main";


const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerMode: "none",
    }}
    initialRouteName="Introduce"
    >
      <Stack.Screen name='Introduce' component={Introduce} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='FindId' component={FindId} />
      <Stack.Screen name='FindPassword' component={FindPassword} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default Router;
