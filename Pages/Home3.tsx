import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Pressable, ScrollView } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scrollContentStyle } from '../Components/scrollContent/scrollContentStyle';

export default function Home3() {
  const [favoritado, setFavoritado] = useState(false);
const escala = useSharedValue(1);

const estiloAnimado = useAnimatedStyle(() => ({
  transform: [{ scale: escala.value }],
}));
    return (
      <ScrollView>
      <View>
          <Text> Bom dia  </Text>
            <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.valor}>Matheus Francisco</Text>
                     <Text style={styles.label}>CPF:</Text>
                     <Text style={styles.valor}>555.816.608-83</Text>
                     <Text style={styles.label}>Senha:</Text>
                        </View>

            </ScrollView>
           


    );
  }

