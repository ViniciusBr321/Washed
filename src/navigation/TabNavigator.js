import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../pages/Home/index.js';
import Recentes from '../pages/Recentes/index.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Recentes" component={Recentes} />
    </Tab.Navigator>
    )
}

export default TabNavigator;