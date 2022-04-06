import React from 'react'
import { View, Text, Linking, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const IndexScreen = ({ navigation }) => {
     const javivilchis = "https://facebook.com/javier.vilchis1"
     const intagram = "https://instagram.com/javivilchis1234" 
     const facebook = ({url}) => {
          Linking.openURL(javivilchis)
     }
     const instagram = ({url}) => {
          Linking.openURL(intagram)
     }
  
     return (
          <SafeAreaView style={styles.container}>
          <View>
               <Text style={styles.title}>React Native Blog</Text>
               <Text style={styles.intro}>We are happy you visit our React Native blog system, you can use this blog system however you want. The blog is build following the tutorial by udemy. There are some differences I have applied. In this build, we are not using expo to create the application.Instead, we are using pure react native hooks and plugins. I hope you enjoy it!</Text>
               <Button
               title="Go to home... again"
               onPress={() => navigation.push('Home')}
               />
              
               <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
               <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
             
               <View style={styles.fb}>
                    <TouchableOpacity onPress={facebook} style={styles.insta}>
                         <Icon.Button name="instagram" onPress={instagram} backgroundColor="orange">
                              <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                              follow me on Instagram
                              </Text>
                         </Icon.Button>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={facebook} >
                   
                         <Icon.Button name="facebook" onPress={facebook} backgroundColor="#3b5998">
                              <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                              follow me on facebook
                              </Text>
                         </Icon.Button>
                       
                    </TouchableOpacity>
               </View>
          </View>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
insta: {marginBottom: 5},
container: {
     backgroundColor: "#f4f4f4",
     alignItems: "center",
     textAlign: "center",
     color: "#333"
},
fb: {
     width: "100%",
     margin: "auto",
     alignContent: "center",
     textAlign: "center",
     alignItems: "center",
     position: "absolute",
     bottom: -200,
},
title: {
     paddingTop: 20,
     textAlign: "center",
     fontSize: 30,
     fontWeight: "400"
},
intro: {
     fontSize: 18,
     lineHeight: 28,
     padding: 10,
     backgroundColor: "#fff",
     margin: 20,
    
}
})

export default IndexScreen