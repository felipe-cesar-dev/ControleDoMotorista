import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [texto, setTexto] = useState('');
  const [textosArmazenados, setTextosArmazenados] = useState([]);

  const armazenarTexto = async () => {
    try {
      const chave = `texto-${Date.now()}`;
      await AsyncStorage.setItem(chave, texto);
      setTexto('');
    } catch (error) {
      console.error(error);
    }
  };

  const recuperarTextos = async () => {
    try {
      const chaves = await AsyncStorage.getAllKeys();
      const textos = await AsyncStorage.multiGet(chaves);
      const textosArmazenados = textos.map((texto) => texto[1]);
      setTextosArmazenados(textosArmazenados);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 50 }}>
      <TextInput
        value={texto}
        onChangeText={(text) => setTexto(text)}
        placeholder="Digite um texto"
      />
      <Button title="Armazenar" onPress={armazenarTexto} />
      <Button title="Recuperar" onPress={recuperarTextos} />
      <FlatList
        data={textosArmazenados}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;