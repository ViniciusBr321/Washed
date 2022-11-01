import React from 'react';
import {  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();

    return(
      <View style={{flex: 1}}>
          
            {/* OPÇÕES CABEÇALHO */}
          <View style={styles.opcoesCabecalho}>
            <TouchableOpacity style={{backgroundColor: '#FF6B00',width: '34%',height: 35,alignItems: 'center',justifyContent: 'center',}}>
              <Text style={{color: 'white'}}>Filtrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}  onPress={() => navigation.navigate('Recentes')}>
              <Text>Recentes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('Favoritos')}>
              <Text>Favoritos</Text>
            </TouchableOpacity>
          </View>

          {/* FILTROS */}
          <View style={styles.filtroLocalizacao}>
            <Text style={styles.textLocalizacao}>Localização</Text>
            <TextInput style={styles.inputPrincipal}
              placeholder='Digite Sua cidade'
            />
          </View>
          {/* TIPOS DE VEICULO */}
          <View style={{bottom: '7.5%'}}> 
            <Text style={styles.textTipos}>Tipo do veiculo</Text>
          </View>
          <View style={styles.opcoes}>
            <TouchableOpacity style={styles.botoes} >
              <Image style={styles.botaoImagem} source={require('projetoApp/assets/logocarro.png')}/>
              <Text style={styles.text}>Carro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image style={styles.botaoImagem} source={require('projetoApp/assets/logomoto.png')}/>
              <Text style={styles.text}>Moto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image style={{width: '61%', height: '62%', top: '5%'}} source={require('projetoApp/assets/logocaminhao.png')}/>
              <Text style={{fontSize: 16, top: '7%'}}>Caminhão/</Text>
              <Text style={{paddingBottom: '10%', fontSize: 16, top: '5%'}}>Outros</Text>
            </TouchableOpacity>
          </View>
          {/* TIPOS DE LAVAGEM */}
          <View style={{bottom: '10%'}}> 
            <Text style={styles.textTipos}>Tipo de lavagem</Text>
          </View>
          <View style={styles.opcoes2}>
            <TouchableOpacity style={styles.botoes}>
              <Image style={{width: '65%', height:'55%'}} source={require('projetoApp/assets/maquina.png')}/>
              <Text style={styles.text}>Simples</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image style={{width: '95%', height:'50%'}} source={require('projetoApp/assets/logolavagem.png')}/>
              <Text style={styles.text}>Completa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoes}>
              <Image style={{width: '70%', height: '45%'}} source={require('projetoApp/assets/logopolimento.png')}/>
              <Text style={styles.text}>Completa + Polimento</Text>
            </TouchableOpacity>
          </View>
                    {/* BOTÃO FILTRAR */}
          <View>
              <TouchableOpacity style={styles.btnFiltrar} onPress={() => navigation.navigate('Filtrados')}>
                  <Text style={styles.btnFiltrarTexto}>Filtrar</Text>
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