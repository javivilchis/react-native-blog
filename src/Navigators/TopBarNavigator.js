import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = () => {
     return (
          <View style={styles.one}>
               <Text style={styles.page}>Home</Text>
          </View>
     )
}
const Test = () => {
     return (
          <View style={styles.two}>
               <Text style={styles.page}>Test</Text>
          </View>
     )
}
const Javi = () => {
     return (
          <View style={styles.three}>
              <Text style={styles.page}>Javi</Text>
          </View>
     )
}

const Tab = createMaterialTopTabNavigator()

const myTabs = () => {

     const insets = useSafeAreaInsets()
     return (
          <Tab.Navigator
          initialRouteName="Home"
          tabBarPosition={{
               activeTintColor: "#b30000",
               labelStyle: { fontSize: 12 },
               style: { backgroundColor: "white", marginTop: insets.top},
               
          }}>
               <Tab.Screen
               name="Home"
               component={Home}
               options={{ tabBarLabel: "Home"}} />
               <Tab.Screen
               name="Javi"
               component={Contact}
               options={{ tabBarLabel: "Javi"}} />
               <Tab.Screen
               name="Blog"
               component={Test}
               options={{ tabBarLabel: "Test"}} />
          </Tab.Navigator>
     )
}

const style = StyleSheet.create({
     page: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent"
     },
     one: {
          backgroundColor: "black"
     },
     two: {
          backgroundColor: "gray"
     },
     three: {
          backgroundColor: "blue"
     }
})

export default function TopBarNavigator(){
     return (
     <NavigationContainer>
          <MyTabs />
     </NavigationContainer>
     )
}