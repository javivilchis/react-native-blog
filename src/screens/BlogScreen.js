import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext'

const BlogScreen = ({ navigation }) => {
    
     const { data, addBlogPost } = useContext(BlogContext)
    
     return (
          <View>
               <Text>Blog</Text>

               <Button title="Add Post" onPress={addBlogPost} />
               
               <FlatList
               data={data}
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