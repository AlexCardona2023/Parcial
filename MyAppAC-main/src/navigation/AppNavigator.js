import React from "react";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import UserScreen from "../screens/UserScreen";
import CatalogScreen from "../screens/CatalogScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

const TabNavigator = () => {
    return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
            let iconName
            if (route.name === 'Home'){
                return <Ionicons name="home-outline" size={size} color={color}/>
            }else if(route.name == 'User'){
                return <Ionicons name="person-outline"size={size} color={color}/>
            }else if(route.name == 'Catalogo'){
                return <MaterialCommunityIcons name="food-steak" size={size} color={color}/>
            }
        },
        tabBarActiveTintColor: '#F5DEB3',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle:{backgroundColor: '#8B0000'}
    })}>
        <Tab.Screen name = "Home" component = {HomeScreen} options={{}}/>
        <Tab.Screen name = "User" component = {UserScreen} options={{}}/>
        <Tab.Screen name = "Catalogo" component = {CatalogScreen} options={{}}/>
    </Tab.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <stack.Navigator initialRouteName="Splash">
            <stack.Screen name = "Splash" component={SplashScreen} options = {{headerShown: false}}/>
            <stack.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
            <stack.Screen name = "Register" component={RegisterScreen} options={{headerShown: false}}/>
            <stack.Screen name = "Settings" component={SettingsScreen} options={{headerShown: false}}/>
            <stack.Screen name = "MainTabs" component={TabNavigator} options = {{headerShown: false}}/>
        </stack.Navigator>
    )
}

export default AppNavigator
