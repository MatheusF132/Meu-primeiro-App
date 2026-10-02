import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home1 from './Pages/Home1';
import HomeScreen from './Pages/HomeScreen';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home 1">
        <Stack.Screen name="Home 1" component={Home1} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home 2" component={Home2} />
        <Stack.Screen name="Home 3" component={Home3} />
        <Stack.Screen name="Home 4" component={Home4} />
        <Stack.Screen name="Home 5" component={Home5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}