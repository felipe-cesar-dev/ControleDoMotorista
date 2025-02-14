import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';

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
    <ImageBackground
    source={require('./assets/cifroes.jpeg')}
    style={{ width: '100%', height: '100%' }} 
    >
      <View>
        <Text>Digite o nome da manutenção:</Text>
        <TextInput
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Ex: Troca de óleo"
        />
        <Text>Digite o valor:</Text>
        <TextInput
          value={valor}
          onChangeText={(text) => setValor(text)}
          placeholder="R$ 20,00"
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
        <Text>Manutenção: {nomeGuardado}</Text>
        <Text>Valor: {valorGuardado}</Text>
        <Text>Data do pagamento: {dataPagamento}</Text>
      </View>
    </ImageBackground>
  );
};

export default App;