import { View, ScrollView, Text, Image } from 'react-native';
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

    <View style={styles.senhaRow}>
      <Text style={styles.valor}>
        {mostrarSenha ? 'senha teste' : '**********'}
      </Text>

      <Pressable onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.eyeButton}>
        <MaterialCommunityIcons
          name={mostrarSenha ? 'eye-off' : 'eye'}
          size={25}
          color="#888"
        />
      </Pressable>
    </View>

    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/marelo.png')}
        style={styles.containerImage}
        resizeMode="contain"
      />
    </View>
      </View>
    </View>
  </ScrollView>
);
    
}