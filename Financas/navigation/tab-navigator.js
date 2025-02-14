import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from '../pages/Inicio.js';
import Lista from '../pages/Lista.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Início"
        component={TelaInicial}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista de Manutenções"
        component={Lista}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

