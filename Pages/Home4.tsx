import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scrollContentStyle } from '../Components/scrollContent/scrollContentStyle';
import CardInfo from '../Components/cardInfo/cardInfo'

export default function Home4() {
  const [favoritado, setFavoritado] = useState(false);
  const escala = useSharedValue(1);
  

const estiloAnimado = useAnimatedStyle(() => ({
  transform: [{ scale: escala.value }],
}));

    return (
      <ScrollView>
        <Text> Ola </Text>
      </ScrollView>
    )}