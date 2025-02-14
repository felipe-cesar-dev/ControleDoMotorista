import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from '../pages/Inicio.js';
import Lista from '../pages/Lista.js';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TelaInicial} />
      <Tab.Screen name="Lista" component={Lista} />
    </Tab.Navigator>
  );
}

