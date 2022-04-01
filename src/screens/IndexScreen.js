import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const IndexScreen = ({ navigation }) => {

     return (
          <View>
               <Text>Welcome Home</Text>
               <Button
               title="Go to home... again"
               onPress={() => navigation.push('Home')}
               />
               <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                         Login with Facebook
                    </Text>
               </Icon.Button>
               <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
               <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
               <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
     )
}
IndexScreen.navigationOptions = () => {
    return ({
          headerRight:
            <Text>OOX</Text>
        })
}
const styles = StyleSheet.create({

})

export default IndexScreen