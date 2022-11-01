import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

import MaskInput from 'react-native-mask-input'

import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {

    const [phone, setPhone] = React.useState('');

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('projetoApp/assets/picwish.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <Text style={{ textAlign: 'center', paddingTop: 0, color: '#FFFFFF', fontSize: 20, }}>Digite seus dados</Text>
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>Nome:</Text>
                <TextInput style={styles.input}
                placeholder='Digite seu nome completo' />
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>E-mail:</Text>
                <TextInput style={styles.input} placeholder='Digite seu E-mail' />
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>Telefone:</Text>
                <MaskInput
                    style={styles.input}
                    value={phone}
                    keyboardType='numeric'
                    placeholder='(99) 99999-9999'
                    onChangeText={(masked, unmasked) => {
                        setPhone(masked); // you can use the unmasked value as well

                        // assuming you typed "9" all the way:
                        console.log(masked); // (99) 99999-9999
                        console.log(unmasked); // 99999999999
                    }}
                    mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>Usuário:</Text>
                <TextInput style={styles.input} placeholder='Digite um nome para usuário' />
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>Senha:</Text>
                <TextInput style={styles.input} placeholder='Digite sua senha' />
                <Text style={{ textAlign: 'center', paddingTop: 10, color: '#FFFFFF' }}>Confirmar Senha:</Text>
                <TextInput style={styles.input} placeholder='Confirme sua senha' />
            </View>
            <View style={{ alignItems: 'center', flex: 1, paddingTop: 40 }}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.btnTexto}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#58C3D1',
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 140,
        marginTop: 20,
        marginLeft: 90,
    },
    input: {
        height: 35,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginLeft: 80,
        marginRight: 80,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        textAlign: 'center',
    },
    btnTexto: {
        color: '#FFF',
    },
    btn: {
        textAlign: 'center',
        justifyContent: 'center',
        width: 150,
        height: 40,
        paddingLeft: 45,
        backgroundColor: '#FF6B00',
        borderRadius: 8,
    },
})