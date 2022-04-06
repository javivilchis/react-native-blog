import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from './src/screens/IndexScreen'
import BlogScreen from './src/screens/BlogScreen'
import ContactScreen from './src/screens/ContactScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from './src/context/BlogContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen name="Home" component={IndexScreen} />
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
  
