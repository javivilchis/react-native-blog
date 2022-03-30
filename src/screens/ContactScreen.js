import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ContactScreen = ({ navigation }) => {

     return (
          <View>
               <Text>Contact</Text>
               <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
     )
}

const styles = StyleSheet.create({

})

export default ContactScreen