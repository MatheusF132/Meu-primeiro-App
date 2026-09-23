import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Pages/HomeScreen';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home 2" component={Home2} />
        <Stack.Screen name="Home 3" component={Home3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}