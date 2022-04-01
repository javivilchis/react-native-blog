import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome';

const BlogScreen = ({ navigation }) => {
    console.log(navigation);
     const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    
     return (
          <View>
               <Text>Blog</Text>

               <Button title="Add Post" onPress={addBlogPost} />
               
               <FlatList
               data={state}
               keyExtractor={ blogPost => blogPost.title}
               renderItem={({ item }) => {
                    return (
                         <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
                              <View style={styles.row}>
                                   <Text style={styles.title}>{item.title} - {item.id}</Text> 
                                   <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <Icon style={styles.icon} name="trash" />
                                   </TouchableOpacity>
                              </View>
                         </TouchableOpacity>
                    )
               }}
               />


               <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
     )
}

BlogScreen.setOptions = () => {
   return (
    navigation.setOptions({
          headerRight: () => (
               <Button
               onPress={() => alert('This is a button!')}
               title="Info"
               color="#fff"
               />
          ),
    })
    )
   
}

const styles = StyleSheet.create({
row: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingVertical: 20,
     borderTopWidth: 1,
     borderColor: 'gray'
},
title: {
     fontSize: 18
},
icon: {
     fontSize: 24
}
})

export default BlogScreen