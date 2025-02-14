import {ImageBackground } from 'react-native';
import MyTabs from './navigation/tab-navigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <ImageBackground
    source={require('./assets/cifroes.jpeg')}
    style={{ width: '100%', height: '100%' }} 
    >
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </ImageBackground>
    
  );
};

export default App;