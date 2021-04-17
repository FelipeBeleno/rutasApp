import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screen/Home';
import { Home2 } from '../screen/Home2';
import { Home3 } from '../screen/Home3';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="Home3" component={Home3} />
        </Stack.Navigator>
    );
}