import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from './src/screens/IndexScreen'
import BlogScreen from './src/screens/BlogScreen'
import ContactScreen from './src/screens/ContactScreen'
import { BlogProvider } from './src/context/BlogContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
// function App() {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={IndexScreen} />
//         <Stack.Screen name="Blog" component={BlogScreen} />
//         <Stack.Screen name="Contact" component={ContactScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default () => { return ( 
  <BlogProvider>
    <App />
  </BlogProvider>

 ) }
  
