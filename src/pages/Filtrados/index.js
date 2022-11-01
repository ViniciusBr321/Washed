import React from 'react';
import {  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Filtrados(){
    const navigation = useNavigation();
  return(
    <View style={styles.cabecalho}>
      <View style={styles.cabecalho}>
          <Image style={styles.logo}
            source={require('projetoApp/assets/logoPequena.png')} />
          <TextInput style={styles.inputCabecalho}
            placeholder="Digite sua cidade:"
          />

          <Image style={styles.logoPerfil}
            source={require('projetoApp/assets/barras.png')}
          />

      </View>
      <View style={styles.opcoesCabecalho}>
          <TouchableOpacity style={styles.menu}>
            <Text>Filtrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text>Recentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <Text>Favoritos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filtroresultados}>
          <Text style={styles.textresultados}>Resultados</Text>
          <View style={styles.abalavajatos1}>
            <Image style={styles.imagemlavato1} source={require('projetoApp/assets/1.png')}/>
            <View>
              <Text style={styles.titulolavajato}>Styllus Car</Text>
              <Text style={styles.letraslavajatos}></Text>
              <Text style={styles.letraslavajatos}>Endereço:R. Prof. João</Text>
              <Text style={styles.letraslavajatos}>Nunes, 610-668</Text>
              <Text style={styles.letraspreço}>Preços:R$30,00-R$80,00</Text>
              <TouchableOpacity style={styles.solicitarS}>
                <Text style={styles.solicitarC} >Solicitar Serviço</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.abalavajatos2}>
            <Image style={styles.imagemlavato2} source={require('projetoApp/assets/2.png')} />
            <View>
              <Text style={styles.titulolavajato}>Prime Estetica Automotiva</Text>
              <Text style={styles.letraslavajatos}></Text>
              <Text style={styles.letraslavajatos}>Endereço:Praça Nossa Sra</Text>
              <Text style={styles.letraslavajatos}>da Piedade</Text>
              <Text style={styles.letraspreço}>Preços:R$35,00-R$85,00</Text>
              <TouchableOpacity style={styles.solicitarS}>
              <Text style={styles.solicitarC} >Solicitar Serviço</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.abalavajatos3}>
            <Image style={styles.imagemlavato3} source={require('projetoApp/assets/ViaLactea.png')} />
            <View>
              <Text style={styles.titulolavajato}>Lavajato Via Láctea</Text>
              <Text style={styles.letraslavajatos}></Text>
              <Text style={styles.letraslavajatos}>Endereço:Rua Juquinha Souto</Text>
              <Text style={styles.letraspreço}>Preços:R$35,00-R$85,00</Text>
              <TouchableOpacity style={styles.solicitarS}>
              <Text style={styles.solicitarC}>Solicitar Serviço</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

    </View>

  )
}

const styles = StyleSheet.create({

  cabecalho: {
    marginTop: 30,
    backgroundColor: '#58C3D1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    width: '100%',
  },

  logo: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputCabecalho: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    width: '55%',
    height: '60%',
    padding: 6,
  },

  logoPerfil: {
    width: '8%',
    height: '50%'
  },

  opcoesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  menu: {
    width: '34%',
    backgroundColor: '#D9D9D9',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filtroresultados: {
    width: '100%',
    height: '44%',
    margin: '4%',
  },

  textresultados: {
    padding: '4%',
    fontSize: '20'
  },
  titulolavajato: {
    marginTop: '7%',
    fontSize: '17'
  },
  letraslavajatos: {
    fontSize: '13',
  },
  letraspreço:{
    fontSize:'15',
    marginTop:'10%'
  },
  imagemlavato1: {
    marginTop: '5%',
    height: '65%',
    width: '40%',
    marginLeft: '2%'
  },
  imagemlavato2: {
    marginTop: '5%',
    height: '65%',
    width: '40%',
    marginLeft: '2%',
    alignItems:'center'
  },
  imagemlavato3: {
    marginTop: '5%',
    height: '65%',
    width: '40%',
    marginLeft: '2%'
  },

  abalavajatos1: {
    marginTop: '5%',
    backgroundColor: '#D9D9D9',
    borderRadius: '20%',
    width: '93%',
    height: '70%',
    flexDirection: 'row',

  },
  abalavajatos2: {
    marginTop: '5%',
    backgroundColor: '#D9D9D9',
    borderRadius: '20%',
    width: '93%',
    height: '70%',
    flexDirection: 'row'
  },
  abalavajatos3: {
    marginTop: '5%',
    backgroundColor: '#D9D9D9',
    borderRadius: '20%',
    width: '93%',
    height: '70%',
    flexDirection: 'row'
  },
  solicitarS:{
    color:'white',
    backgroundColor:'#FF6B00',
    width:'80%',
    height:'20%',
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    marginLeft:'10%',
    marginTop:'5%',
    borderRadius:'7%',
  },
  solicitarC:{
    color:'#fff'
  }

});
  

