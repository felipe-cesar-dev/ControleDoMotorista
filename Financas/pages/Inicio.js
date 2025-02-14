import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('manutencao.db');

const TelaInicial = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [manutencao, setManutencao] = useState({});

  const criarTabela = async () => {
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS manutencao (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT NOT NULL,
          valor TEXT NOT NULL,
          dataPagamento TEXT NOT NULL
        );
      `);
    });
  };

  const guardarManutencao = async () => {
    criarTabela();

    const dados = {
      nome: nome,
      valor: valor,
      dataPagamento: dataPagamento,
    };

    db.transaction(tx => {
      tx.executeSql(`
        INSERT INTO manutencao (nome, valor, dataPagamento)
        VALUES (?, ?, ?);
      `, [dados.nome, dados.valor, dados.dataPagamento]);
    });

    setManutencao(dados);
  };

  return (
    <View>
      <Text>Digite o nome da manutenção:</Text>
      <TextInput value={nome} onChangeText={(text) => setNome(text)} placeholder="Ex: Troca de óleo" />
      <Text>Digite o valor:</Text>
      <TextInput value={valor} onChangeText={(text) => setValor(text)} placeholder="R$ 20,00" keyboardType="numeric" />
      <Text>Digite a data do pagamento:</Text>
      <TextInput value={dataPagamento} onChangeText={(text) => setDataPagamento(text)} placeholder="(dd/mm/aaaa)" keyboardType="numeric" />
      <Button title="Guardar Manutenção" onPress={guardarManutencao} />
      <View>
        <Text>Manutenção:</Text>
        <Text>Nome: {manutencao.nome}</Text>
        <Text>Valor: {manutencao.valor}</Text>
        <Text>Data do pagamento: {manutencao.dataPagamento}</Text>
      </View>
    </View>
  );
};

export default TelaInicial;