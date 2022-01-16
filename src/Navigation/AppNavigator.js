import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screen/BookScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import CartScreen from '../screen/CartScreen';

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='Books'
                component ={BookScreen}
                options={{headerRight: props => <ShoppingCartIcon {...props} />}}
                />
                <Stack.Screen
                name='Cart'
                component ={CartScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator