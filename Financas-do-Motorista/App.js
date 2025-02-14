import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [nomeGuardado, setNomeGuardado] = useState('');
  const [valor, setValor] = useState('');
  const [valorGuardado, setValorGuardado] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');

  const RecolheDados = () => {
    setNomeGuardado(nome);
    setValorGuardado(valor);
    setDataPagamento(dataPagamento);
  };

  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Nome"
      />
      <Text>Digite o valor:</Text>
      <TextInput
        value={valor}
        onChangeText={(text) => setValor(text)}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <Text>Digite a data do pagamento:</Text>
      <TextInput
        value={dataPagamento}
        onChangeText={(text) => setDataPagamento(text)}
        placeholder="Data do pagamento (dd/mm/aaaa)"
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={RecolheDados} />
      <Text>Nome guardado: {nomeGuardado}</Text>
      <Text>Valor guardado: {valorGuardado}</Text>
      <Text>Data do pagamento guardada: {dataPagamento}</Text>
    </View>
  );
};

export default App;