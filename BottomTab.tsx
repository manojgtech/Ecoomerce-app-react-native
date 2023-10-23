import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import Dashboard from './Dashboard';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" options={{
      tabBarLabel: 'Home',
      headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <Icon name="product-hunt" color={color} size={size} />
      ),
    }} component={Products} />
      <Tab.Screen name="Dashboard"
      
      options={{
      tabBarLabel: 'Dashboard',
      headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <Icon name="user" color={color} size={size} />
      ),
    }} component={Dashboard} />
    </Tab.Navigator>
  );
}

export default BottomTab
