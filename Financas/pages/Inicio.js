import { View, Text, TextInput, Button} from 'react-native';
import { AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import {ImageBackground } from 'react-native';
import { styles } from '../styles/style';

const TelaInicial = () => {
  const [nome, setNome] = useState('');
  const [nomeGuardado, setNomeGuardado] = useState('');
  const [valor, setValor] = useState('');
  const [valorGuardado, setValorGuardado] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [dataPagamentoGuardada, setDataPagamentoGuardada] = useState('');

  const guardarManutencao = async () => {
    try {
      await AsyncStorage.setItem('manutencao', JSON.stringify({
        nome: nome,
        valor: valor,
        dataPagamento: dataPagamento,
      }));
      setNomeGuardado(nome);
      setValorGuardado(valor);
      setDataPagamentoGuardada(dataPagamento);
      console.log('Manutenção guardada com sucesso!');
    } catch (error) {
      console.log('Erro ao guardar manutenção:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/cifroes.jpeg')} style={{ width: '100%', height: '100%' }} >
      <View style = {styles.inicio}>
        <Text style = {styles.textoInicio}>Digite o nome da manutenção:</Text>
        <TextInput value={nome} onChangeText={(text) => setNome(text)} placeholder="Ex: Troca de óleo" style = {styles.inputInicio} />
        <Text style = {styles.textoInicio}>Digite o valor:</Text>
        <TextInput style = {styles.inputInicio} value={valor} onChangeText={(text) => setValor(text)} placeholder="R$ 20,00" keyboardType="numeric" />
        <Text style = {styles.textoInicio}>Digite a data do pagamento:</Text>
        <TextInput style = {styles.inputInicio} value={dataPagamento} onChangeText={(text) => setDataPagamento(text)} placeholder="(dd/mm/aaaa)" keyboardType="numeric" />
        <Button color= 'green' title="Guardar Manutenção" onPress={guardarManutencao} />
      </View>
    </ImageBackground>
  );
};

export default TelaInicial;