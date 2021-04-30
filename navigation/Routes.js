import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons'

import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'
import SplashScreen from '../Screens/splashScreen'

import Home from '../Screens/Home'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function  RootNavigator (){
    return(
     
    <Stack.Navigator initialRouteName="splashscreen">
    <Stack.Screen name='splashscreen' component={SplashNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='auth' component={AuthNavigator} options={{headerShown:false}}/>
    <Stack.Screen name='home' component={HomeNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
    }




  
   
   
   const HomeNavigator = ()=>(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name='Home' component={Home}/>
        </Tab.Navigator>
    )

    const AuthNavigator = ()=>(
        <Stack.Navigator initialRouteName="signin">
            <Stack.Screen name='signin' component={SignIn}/>
            <Stack.Screen name='signup' component={SignUp}/>

        </Stack.Navigator>
    )


    const SplashNavigator = ()=>(
        <Stack.Navigator initialRouteName="splashscreen" >
            <Stack.Screen name='splashscreen' component={SplashScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
    )
    



