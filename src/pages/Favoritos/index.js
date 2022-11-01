import React from 'react';
import {  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Favoritos(){
    const navigation = useNavigation();

    return(
      <View style={{flex: 1}}>
          
            {/* OPÇÕES CABEÇALHO */}
          <View style={styles.opcoesCabecalho}>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Home')}>
              <Text>Filtrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Recentes')}>
              <Text>Recentes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FF6B00',width: '34%',height: 35,alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color: 'white'}}>Favoritos</Text>
            </TouchableOpacity>
          </View>
      </View>
    
    )
  }


const styles = StyleSheet.create({
  
  cabecalho:{
    backgroundColor: '#58C3D1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '9%',
    width: '100%'
  },
  
  logo:{
    width:'24%',
    height:'100%'
  },

  inputCabecalho:{
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    width: '55%',
    height: '60%',
    padding: 6,
    
    
  },

  logoPerfil:{
    width: '100%',
    height: '40%'
  },
  
  opcoesCabecalho:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    

  },

  touchOpcao:{
    width: '5%',
    justifyContent: 'flex-end',
    padding: '0%'
  },

  menu:{
    width: '34%',
    backgroundColor: '#D9D9D9',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  opcoes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '27%',
    bottom: '15%'
  },

  opcoes2:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '27%',
    bottom: '20%'
  },

  inputPrincipal:{
    backgroundColor: '#e9e9e9',
    borderRadius: 8,
    width: '83%',
    height: '30%',
    padding: 10,
    
  },

  botoes:{
    backgroundColor: '#e9e9e9',
    width: '30%',
    height: '75%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5
  },

  botaoImagem:{
    width: '71%',
    height: '75%',
    
    
  },

  filtroLocalizacao:{
    width: '100%',
    height: '24%',
    alignItems: 'center'
  },

  textLocalizacao:{
    padding: '4%',
    paddingRight: '75%'
  },

  text:{
    fontSize: 16
  },

  textTipos:{
    fontSize: 18,
    paddingBottom: 18,
    paddingLeft: 12
  },

  btnFiltrar:{
    backgroundColor: '#FF6B00',
    width: '35%',
    height: '22%',
    bottom: '59%',
    left: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 18,
  },

  btnFiltrarTexto:{
    color: 'white',
    fontSize: 17
  }
  

})