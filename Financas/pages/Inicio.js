import { View, Text, TextInput, Button} from 'react-native';
import React, { useState } from 'react';
import {ImageBackground } from 'react-native';
import { styles } from '../styles/style';
import { guardarManutencao } from '../data/guardarManutencao';

const TelaInicial = () => {
  const nome = useState('');
  const nomeGuardado= useState('');
  const valor = useState('');
  const valorGuardado= useState('');
  const dataPagamento = useState('');

    return(
    <ImageBackground
    source={require('../assets/cifroes.jpeg')}
    style={{ width: '100%', height: '100%' }} 
    >
        <View style = {styles.inicio}>
            <Text style = {styles.textoInicio}>Digite o nome da manutenção:</Text>
            <TextInput
            value={nome}
            placeholder="Ex: Troca de óleo"
            style = {styles.inputInicio}
            />
            <Text style = {styles.textoInicio}>Digite o valor:</Text>
            <TextInput
            style = {styles.inputInicio}
            value={valor}
            placeholder="R$ 20,00"
            keyboardType="numeric"
            />
            <Text style = {styles.textoInicio}>Digite a data do pagamento:</Text>
            <TextInput
            style = {styles.inputInicio}
            value={dataPagamento}
            placeholder="(dd/mm/aaaa)"
            keyboardType="numeric"
            />
            <Button color= 'green' title="Guardar Manutenção" onPress={guardarManutencao} />
            <Text>Manutenção: {nomeGuardado}</Text>
            <Text>Valor: {valorGuardado}</Text>
            <Text>Data do pagamento: {dataPagamento}</Text>
        </View>
      </ImageBackground>
    )
}

export default TelaInicial