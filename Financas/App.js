import {ImageBackground } from 'react-native';
import TelaInicial from './pages/Inicio';

const App = () => {
  return (
    <ImageBackground
    source={require('./assets/cifroes.jpeg')}
    style={{ width: '100%', height: '100%' }} 
    >
      <TelaInicial/>
    </ImageBackground>
  );
};

export default App;