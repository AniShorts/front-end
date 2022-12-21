import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Introduce, Login, Signup } from '../login';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{
     headerMode:"none"
    }} initialRouteName='Introduce'>
      <Stack.Screen name='Introduce' component={Introduce} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default Router