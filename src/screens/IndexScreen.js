import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const IndexScreen = ({ navigation }) => {

     return (
          <View>
               <Text>Welcome Home</Text>
               <Button
               title="Go to home... again"
               onPress={() => navigation.push('Home')}
               />
               <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
               <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
     )
}

const styles = StyleSheet.create({

})

export default IndexScreen