import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import Icon from 'react-native-vector-icons/FontAwesome';

const BlogScreen = ({ navigation }) => {
    

     const { state, deleteBlogPost } = useContext(Context)
     
     navigation.setOptions(
          {
               headerTitle: "Blog", 
               headerRight: () => ( 
               <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Icon name="plus" />
               </TouchableOpacity>
               )
          }
     )
     
     return (
          <View>
               <Text style={styles.maintitle}>Blog</Text>
               <FlatList
               data={state}
               keyExtractor={ blogPost => blogPost.title}
               renderItem={({ item }) => {
                    return (
                         item ? 
                         <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id})}>
                              <View style={styles.row}>
                                   <Text style={styles.title}>{item.id} - {item.title} </Text> 
                                   <Text style={styles.title}> {item.content}</Text>
                                   <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                        <Icon style={styles.icon} name="trash" />
                                   </TouchableOpacity>
                                   
                              </View>
                         </TouchableOpacity>
                         : null
                    )
               }}
               />
               <View style={styles.buttonlist}>
                    <Button color="white" title="create" onPress={() => navigation.navigate('Create')} />
                    <Button color="white" title="Go to Home" onPress={() => navigation.navigate('Home')} />
                    <Button color="white" title="Go back" onPress={() => navigation.goBack()} />
               </View>
              
          </View>
     )
}

const styles = StyleSheet.create({
maintitle: {
     justifyContent: "center",
     textAlign: "center",
     fontSize: 20,
     padding: 10
},
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
},
buttonlist: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     backgroundColor: '#f46319',
},
color: {
     color: "#fff"
}
})

export default BlogScreen