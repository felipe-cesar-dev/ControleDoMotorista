export const recuperarManutencao = async () => {
    try {
      const manutencao = await AsyncStorage.getItem('manutencao');
      if (manutencao) {
        const dados = JSON.parse(manutencao);
        console.log('Dados da manutenção:', dados);
      } else {
        console.log('Nenhuma manutenção guardada!');
      }
    } catch (error) {
      console.log('Erro ao recuperar manutenção:', error);
    }
  };