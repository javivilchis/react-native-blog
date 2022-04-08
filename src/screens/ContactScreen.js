import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
//import { firebase } from '../api/BlogPostApi'

const ContactScreen = ({ navigation }) => {
     // const [post, setPost] = useState([])
     // const blog = firebase.firestore().collection('blogposts')
     // useEffect(() => {
     //      blog
     //           .orderBy('createdAt', 'desc')
     //          .onSnapshot(
     //              querySnapshot => {
     //                  const blogposts = []
     //                  querySnapshot.forEach(doc => {
     //                      const item = doc.data()
     //                      item.id = doc.id
     //                      blogposts.push(item)
     //                  });
     //                  setPost(blogposts)
     //              },
     //              error => {
     //                  console.log(error)
     //              }
     //          )
     //  }, [])

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