import React, { useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
          <View>
               <Text>Show</Text>
               <Text>Title: {blogPost.title} and the ID: {blogPost.id}</Text>
          </View>
     )
}

const styles = StyleSheet.create({

})

export default ShowScreen