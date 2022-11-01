import React from 'react';
import {  View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation();
    return(
      <View style={styles.container}>
      <View>
        <Image
        source={require('projetoApp/assets/picwish.png')}
        style={styles.logo}
        />
      </View>
      <View>
        <Text style={{textAlign: 'center', paddingTop: 5, color: '#FFFFFF', fontSize: 18}}>Usuário:</Text> 
        <TextInput style={styles.input} placeholder='Digite o usuário'
        required
        />
        <Text style={{textAlign: 'center', paddingTop: 20, color: '#FFFFFF', fontSize: 18}}>Senha:</Text>
        <TextInput style={styles.input} placeholder='Digite a Senha'/>
      </View>
      <View style={{alignItems: 'center',flex:1, paddingTop: 40}}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTexto}>Entre</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', paddingTop: 40}}>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.btnTexto2}>Cadastre-se</Text>
        </TouchableOpacity>
        <Text style={{paddingTop: 100, textDecorationLine: 'underline', color: '#FFFFFF', paddingBottom: 20}}>Esqueceu sua senha?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#58C3D1',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 140,
    marginTop: 150,
    marginLeft: 90,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginLeft: 80,
    marginRight: 80,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    textAlign: 'center',
  },
  button:{
    backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'yellow',
    width: 300,
  },
  btn:{
    textAlign: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    paddingLeft: 22,
    backgroundColor: '#FF6B00',
    borderRadius: 8,
    top: '60%'
  },
  btnTexto:{
    color:'#FFF',
    fontSize: 17,
    paddingLeft: 35,
  },

  btnTexto2:{
    color:'#FFF',
    fontSize: 17,
    paddingLeft: 10,
  },
  btn2:{
    textAlign: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    paddingLeft: 22,
    backgroundColor: '#606060',
    borderRadius: 8,
    
  }
});