import React, { useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({ navigation, route }) => {
      //use route to pass in the params between screens
     const{ state } = useContext(Context)
     //console.log(route.params)
     navigation.setOptions(
          {
               headerTitle: "Blog", 
               headerRight: () => ( 
               <TouchableOpacity onPress={() => navigation.navigate('Edit', route.params)}>
                    <Icon name="pencil" size={25} />
               </TouchableOpacity>
               )
          }
     )
     //navigation.getParam('id')
     // for older version of react navigation, you would use navigation.getParams('id')
     // for new version of react navigation, you use route as a prop param and get it like this
     // rout.params.id to get the value of the param you are passing in
     // console.log(route.params.id)
     const blogPost = state.find((blogPost) => blogPost.id === route.params.id )

     return  (
          <SafeAreaView style={styles.container}>
               <View>
                    <Text style={styles.title}>{blogPost.title}</Text>
                    <Text style={styles.content}>Title: {blogPost.title}  </Text>
                    <Text>ID: {blogPost.id}</Text>
               </View>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: "#f4f4f4",
          alignItems: "center",
          textAlign: "center",
          color: "#333",
          width: "100%",
          flex: 1,
     },
     title: {
          paddingTop: 20,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "400"
     },
     content: {
          border: 1,
          borderColor: "#333",
          borderStyle: "solid",
          width: "100%",
          fontSize: 18,
          lineHeight: 28,
          padding: 10,
          backgroundColor: "#fff",
          margin: 20,
         
     }
})

export default ShowScreen