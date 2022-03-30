import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { Context } from '../context/BlogContext'

const BlogScreen = ({ navigation }) => {
    
     const { state, addBlogPost } = useContext(Context)
    
     return (
          <View>
               <Text>Blog</Text>

               <Button title="Add Post" onPress={addBlogPost} />
               
               <FlatList
               data={state}
               keyExtractor={ blogPost => blogPost.title}
               renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
               }}
               />


               <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
     )
}

const styles = StyleSheet.create({

})

export default BlogScreen