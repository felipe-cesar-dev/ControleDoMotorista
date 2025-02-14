import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from '../styles/style';

const TelaInicial = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [manutencao, setManutencao] = useState([]);

  const guardarManutencao = () => {
    const dados = {
      nome: nome,
      valor: valor,
      dataPagamento: dataPagamento,
    };

    setManutencao([...manutencao, dados]);
    setNome('');
    setValor('');
    setDataPagamento('');
  };

  return (
    <ImageBackground source={require('../assets/cifroes.jpeg')} style={{ width: '100%', height: '100%' }} >
      <View style={styles.inicio}>
        <Text style={styles.textoInicio}>Digite o nome da manutenção:</Text>
        <TextInput value={nome} onChangeText={(text) => setNome(text)} placeholder="Ex: Troca de óleo" style={styles.inputInicio} />
        <Text style={styles.textoInicio}>Digite o valor:</Text>
        <TextInput style={styles.inputInicio} value={valor} onChangeText={(text) => setValor(text)} placeholder="R$ 20,00" keyboardType="numeric" />
        <Text style={styles.textoInicio}>Digite a data do pagamento:</Text>
        <TextInput style={styles.inputInicio} value={dataPagamento} onChangeText={(text) => setDataPagamento(text)} placeholder="(dd/mm/aaaa)" keyboardType="numeric" />
        <Button color="green" title="Guardar Manutenção" onPress={guardarManutencao} />
        {manutencao.map((item, index) => (
          <View key={index}>
            <Text>Manutenção: {item.nome}</Text>
            <Text>Valor: {item.valor}</Text>
            <Text>Data do pagamento: {item.dataPagamento}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

export default TelaInicial;