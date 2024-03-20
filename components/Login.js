import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = () => {
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();

    const handelSubmit = () => {
        if(email.length > 0 && password.length > 0){
            alert('ok')
        }
        else{
            alert('Email et mot de passe sont obligatoires');
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput 
            placeholder='Identifiant ou e-mail *'
            style={styles.input}
            onChangeText={text => setEmail(text)}
        />
        <TextInput 
            placeholder='Mot de passe *'
            style={styles.input}
            onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
            onPress={handelSubmit}
        >
            <View style={styles.btn}>
                <Text style={styles.txtBtn}>Se connecter</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#229BA9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal :18
      },
      form:{
        alignItems: 'center',
        justifyContent: 'center',
        width : "100%",
        backgroundColor: '#FFF',
        height : 400,
        borderRadius:25
      },
      title:{
        color:'#229BA9',
        fontSize: 28,
        marginBottom :28
      },
      input:{
        borderWidth:1,
        borderColor : '#229BA9',
        width :"75%",
        textAlign:'center',
        padding :6,
        borderRadius :25,
        fontSize :16,
        marginBottom:15
      },
      btn:{
        backgroundColor:'#229BA9',
        borderRadius :25,
        width: 280,
        padding:11,
        marginTop : 12
      },
      txtBtn:{
        color :'#FFF',
        textAlign :'center',
        fontSize:17
      }
})