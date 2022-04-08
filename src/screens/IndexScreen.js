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
     navigation.setOptions(
          {
               headerTitle: "Home", 
               headerRight: () => ( 
               <TouchableOpacity onPress={() => navigation.navigate('Edit', route.params)}>
                    <Icon name="pencil" size={25} />
               </TouchableOpacity>
               )
          }
     )

     return (
          <SafeAreaView style={styles.container}>
          <View>
               <Text style={styles.title}>Home</Text>
               <View style={styles.intro}>
                    <Text style={styles.mainpage}>I am happy you visit, this React Native blog system can be use however you want.</Text>
                    <Text></Text>
                    <Text style={styles.mainpage}>The blog is build following the tutorial by udemy with some differences I have applied. The main differences include: not using expo to create the application. Instead, I am using pure react native hooks and plugins. </Text>
                    <Text style={styles.mainpage}>I hope you enjoy it!</Text>
               </View>
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
     backgroundColor: "#DDDBD7",
     alignItems: "center",
     textAlign: "center",
     color: "#333",
     height: "100%"
},
fb: {
     flex: 1,
     width: "100%",
     margin: "auto",
     alignContent: "center",
     textAlign: "center",
     alignItems: "center",
     position: "absolute",
     bottom: 0,
},
title: {
     paddingTop: 20,
     textAlign: "center",
     fontSize: 30,
     fontWeight: "400"
},
intro: {
     borderRadius: 8,
     padding: 10,
     backgroundColor: "#fff",
     margin: 20,
    
},
mainpage: {
     fontSize: 18,
     lineHeight: 28,
}
})

export default IndexScreen