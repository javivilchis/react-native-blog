import React, {useLayoutEffect} from 'react'
import { View, Text, Linking, TouchableOpacity, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';


const IndexScreen = ({ navigation }) => {
   
     const {t, i18n} = useTranslation()

     const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }

     const javivilchis = "https://facebook.com/javier.vilchis1"
     const intagram = "https://instagram.com/javivilchis1234" 
     
     const facebook = ({url}) => {
          Linking.openURL(javivilchis)
     }
     const instagram = ({url}) => {
          Linking.openURL(intagram)
     }
     useLayoutEffect(() => {
          
          navigation.setOptions(
               {
                    headerTitle: "LANG", 
                    headerRight: () => ( 
                    <TouchableOpacity onPress={() => navigation.navigate('Edit', route.params)}>
                         <Icon name="pencil" size={25} />
                    </TouchableOpacity>
                    )
               }
          )
     })
    

     return (
          <SafeAreaView style={styles.container}>
               <ScrollView>
          <View>
               <Text style={styles.title}>{t('home')}</Text>
               <View style={styles.intro}>
                    <Text>{t('Hello world')}</Text>
                    <Text style={styles.mainpage}>{t('welcome paragraph 1')}</Text>
                    <Text></Text>
                    <Text style={styles.mainpage}>{t('welcome paragraph 2')}</Text>
                    <Text style={styles.mainpage}>I hope you enjoy it!</Text>
               </View>
              
              
              <View style={styles.language}>
                   <Text>{t('languagetext')} {i18n.language}</Text>
                    <TouchableOpacity>
                         <Icon.Button name="language" backgroundColor="#27aae1"
                              onPress={ () => {
                              i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
                              }}>
                              <Text style={styles.white}>{i18n.language === 'en' ? 'Español' : 'English'}</Text> 
                         </Icon.Button>
                    </TouchableOpacity>

                  
              </View>
              
              
              
               <View style={styles.fb}>
                    <TouchableOpacity onPress={facebook} style={styles.insta}>
                         <Icon.Button name="instagram" onPress={instagram} backgroundColor="orange">
                              <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                              follow me on Instagram
                              </Text>
                         </Icon.Button>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={facebook} >
                   
                         <Icon.Button name="facebook" onPress={facebook} backgroundColor="#3b5998">
                              <Text style={{ fontFamily: 'Arial', fontSize: 15, color: "#fff" }}>
                              follow me on facebook
                              </Text>
                         </Icon.Button>
                       
                    </TouchableOpacity>
               </View>
          </View>
          </ScrollView>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     white: {
          color: "#ffffff"
     },
     language: {
          flex: 1,
          margin: "auto",
          width: "100%",
          alignItems: "center",
          marginBottom: 5
     },
     insta: {
          marginBottom: 5
     },
     container: {
          backgroundColor: "#DDDBD7",
          alignItems: "center",
          textAlign: "center",
          color: "#333",
          height: "100%"
     },
     languageBtn: {
          flex: 1,
          width: '100%',
         
          color: "red",
          paddingLeft: 30,
     },
     fb: {
          flex: 1,
          width: "100%",
          margin: "auto",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
          // position: "absolute",
          // bottom: 0,
     },
     title: {
          paddingTop: 20,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "400"
     },
     intro: {
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#fff",
          margin: 20,
     
     },
     mainpage: {
          fontSize: 18,
          lineHeight: 28,
     }
})

export default IndexScreen