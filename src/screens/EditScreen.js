import React, { useContext} from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext';
import Form from '../components/Form'

const EditScreen = ({ navigation, route, onSubmit }) => {
     //use route to pass in the params between screens
     const { state, editBlogPost } = useContext(Context)
     const id = route.params.id
     const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
     console.log("----------- edit screen ---------------------------")
     console.log("EDIT SCREEN: ",id, blogPost.title, blogPost.content)
     return <Form 
          initialValues={{ title: blogPost.title, content: blogPost.content}}
          onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop())
     }} />
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