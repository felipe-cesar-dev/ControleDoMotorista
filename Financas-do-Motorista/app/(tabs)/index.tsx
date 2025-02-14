import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [nomeGuardado, setNomeGuardado] = useState('');
  const [valor, setValor] = useState('');
  const [valorGuardado, setValorGuardado] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');

  const handleGuardarNome = () => {
    setNomeGuardado(nome);
    setValorGuardado(valor);
    setDataPagamento(dataPagamento);
  };

  return (
    <View>
      <Text>Qual é a manutenção?</Text>
      <TextInput
        value={nome}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite aqui a manutenção"
      />
      <Text>Digite o valor:</Text>
      <TextInput
        value={valor}
        onChangeText={(text) => setValor(text)}
        placeholder="R$"
        keyboardType="numeric"
      />
      <Text>Digite a data do pagamento:</Text>
      <TextInput
        value={dataPagamento}
        onChangeText={(text) => setDataPagamento(text)}
        placeholder="(dd/mm/aaaa)"
        keyboardType="numeric"
      />
      <Button title="Guardar" onPress={handleGuardarNome} />
      <Text>Peça em manutenção: {nomeGuardado}</Text>
      <Text>Valor guardado:  R${valorGuardado}</Text>
      <Text>Data do pagamento: {dataPagamento}</Text>
    </View>
  );
};

export default App;