import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Text} from 'react-native'
import IndexScreen from './src/screens/IndexScreen'
import BlogScreen from './src/screens/BlogScreen'
import ContactScreen from './src/screens/ContactScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import { Provider } from './src/context/BlogContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} options={{
          headerRight: () => (
            <Text>X</Text>
          ),
        }}/>
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
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
  
