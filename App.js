import React from 'react'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateBottomTabNavigator } from '@react-navigation/bottom-tabsnpm install react-native-pager-view'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import IndexScreen from './src/screens/IndexScreen'
import BlogScreen from './src/screens/BlogScreen'
import ContactScreen from './src/screens/ContactScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/context/BlogContext'

import Icon from 'react-native-vector-icons'

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const MyTabs = () =>  {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#3C3C3C',
      tabBarLabelStyle: { fontSize: 15 },
      tabBarStyle: { backgroundColor: '#FFC20E' },
      tabBarBounces: true,
      tabBarInactiveTintColor: '#8F8E8C',
      
    }}>
      <Tab.Screen name="Home  " component={IndexScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
  
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="React Native Blog" component={MyTabs} />
        <Stack.Screen name="Blog" component={BlogScreen}/>
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default () => { return ( 
  <Provider>
    <App />
  </Provider>

 ) }
  
