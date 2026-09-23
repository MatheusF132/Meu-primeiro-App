import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home3() {
  const [favoritado, setFavoritado] = useState(false);
const escala = useSharedValue(1);

const estiloAnimado = useAnimatedStyle(() => ({
  transform: [{ scale: escala.value }],
}));
    return (
        <View style = {styles.container}>
            <Text> Bom dia  </Text>
            </View>


    );
  }

