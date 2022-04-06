import React, { useContext, useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation, route }) => {
     //use route to pass in the params between screens
     const { state } = useContext(Context)

     const blogPost = state.find((blogPost) => blogPost.id === route.params.id)

     const [title, setTitle] = useState(blogPost.title)
     const [content, setContent] = useState(blogPost.content)


     return  (
          <View>
               <Text style={styles.label}>Enter Title: {route.params.id} </Text>
               <Text>Edit Title:</Text>
               <TextInput value={title} onChangeText={(newTitle)=> setTitle(newTitle)} />
               <Text>Edit Content:</Text>
               <TextInput value={content} onChangeText={(newContent)=> setTitle(newContent)} />
          </View>
     )
}

const styles = StyleSheet.create({
input: {
     fontSize: 18,
     borderWidth: 1,
     borderColor: 'black',
     marginBottom: 15,
     padding: 5,
     margin:5,
    
},
label: {
     fontSize: 20,
     marginBottom: 5,
     marginLeft: 5,
     marginTop: 10
}
})

export default EditScreen