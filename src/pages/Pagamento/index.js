import React from 'react';
import {  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Pagamento(){
    const navigation = useNavigation();

    return(
      <View style={{flex: 1}}>
          
            {/* OPÇÕES CABEÇALHO */}
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


          {/* INPUTS DE INFORMAÇÕES */}
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
    fontSize: 20
  },
  titulolavajato: {
    marginTop: '7%',
    fontSize: 17
  },
  letraslavajatos: {
    fontSize: 13,
  },
  letraspreço:{
    fontSize: 15,
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
    borderRadius: 20,
    width: '93%',
    height: '70%',
    flexDirection: 'row',

  },
  abalavajatos2: {
    marginTop: '5%',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    width: '93%',
    height: '70%',
    flexDirection: 'row'
  },
  abalavajatos3: {
    marginTop: '5%',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
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
    borderRadius:7,
  },
  solicitarC:{
    color:'#fff'
  }
  

})