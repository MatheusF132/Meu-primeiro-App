import { View, ScrollView, Text, } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from '../styles';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { Pressable, } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home2() {
const [favoritado, setFavoritado] = useState(false);
const escala = useSharedValue(1);
const [senha, setSenha] = useState('')
const [mostrarSenha, setMostrarSenha] = useState(false);


const estiloAnimado = useAnimatedStyle(() => ({
  transform: [{ scale: escala.value }],
}));
  return (
    <View style={styles.containerPerfil}>
      <View style={styles.cardPerfil}>
        <View style ={styles.fotoPerfil}>
          <MaterialCommunityIcons name="camera-plus" size={32} color="#888" />
        </View>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>Matheus Francisco</Text>

       <Text style={styles.label}>CPF:</Text>
       <Text style={styles.valor}>555.816.608-83</Text>

       <Text style={styles.label}>Senha:</Text>
       <Text style={styles.valor}>senha teste</Text>
       <Text>
      icon={mostrarSenha ? 'eye-off' : 'eye'}
      onPress={() => setMostrarSenha(!mostrarSenha)}
    </Text>
    


      </View>
    </View>
  );
}