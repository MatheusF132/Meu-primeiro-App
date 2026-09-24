import { View, ScrollView, Text, } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from '../styles';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Pressable, } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scrollContentStyle } from '../Components/scrollContent/scrollContentStyle';

export default function Home2() {
const [favoritado, setFavoritado] = useState(false);
const escala = useSharedValue(1);
const [senha, setSenha] = useState('')
const [mostrarSenha, setMostrarSenha] = useState(false);

const estiloAnimado = useAnimatedStyle(() => ({
  transform: [{ scale: escala.value }],
}));
  return (
  <ScrollView style={{ flex: 1 }} contentContainerStyle={scrollContentStyle.scrollContent}>
    <View style={styles.containerPerfil}>
      <View style={styles.cardPerfil}>
        <View style={styles.fotoPerfil}>
          <MaterialCommunityIcons name="account" size={32} color="#888" />
        </View>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>Matheus Francisco</Text>

        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.valor}>555.816.608-83</Text>

        <Text style={styles.label}>Senha:</Text>

<View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
  <Text style={styles.valor}>
    {mostrarSenha ? 'senha teste' : '*********'}
  </Text>

  <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={{ marginLeft: 10 }}>
    <MaterialCommunityIcons
      name={mostrarSenha ? 'eye-off' : 'eye'}
      size={25}
      color="#888"
       />
      </Pressable>
       </View>
      </View>
    </View>
  </ScrollView>
);
    
}