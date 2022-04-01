import React, { useContext} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({ navigation, route }) => {
     const{ state } = useContext(Context)
     //navigation.getParam('id')
     // for older version of react navigation, you would use navigation.getParams('id')
     // for new version of react navigation, you use route as a prop param and get it like this
     // rout.params.id to get the value of the param you are passing in
     // console.log(route.params.id)
     const blogPost = state.find((blogPost) => blogPost.id === route.params.id )

     return  (
          <View>
               <Text>Title: {blogPost.title} and the ID: {blogPost.id}</Text>
          </View>
     )
}

const styles = StyleSheet.create({

})

export default ShowScreen