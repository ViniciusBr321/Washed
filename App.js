import React from 'react';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Pagamento from './src/pages/Pagamento';
import Recentes from './src/pages/Recentes';
import Favoritos from './src/pages/Favoritos';
import { TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "#58C3D1"}}}>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Filtrados" component={Pagamento}/>
        <Stack.Screen name="Recentes" component={Recentes}/> 
        <Stack.Screen name="Favoritos" component={Favoritos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

