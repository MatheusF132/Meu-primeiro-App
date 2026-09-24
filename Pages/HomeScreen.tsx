import { styles } from '../styles';
import { Button, Divider, Card, IconButton, ProgressBar } from 'react-native-paper';
import { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput, Pressable, ScrollView} from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { scrollContentStyle } from '../Components/scrollContent/scrollContentStyle';
import Ball from '../Components/Ball/Ball';
export default function HomeScreen({ navigation }: any) {

  const [secaoSelecionada, setSecaoSelecionada] = useState(1);
  const [mostrarCard, setMostrarCard] = useState(false);
  const width = useSharedValue(100);
  const [progresso, setProgresso] = useState(1);
  const escalaCard3 = useSharedValue(1);
  useEffect(() => {
  if (mostrarCard) {
    const inicio = Date.now();
    const intervalo = setInterval(() => {
      const passado = (Date.now() - inicio) / 5000;
      if (passado >= 1) {
        setMostrarCard(false);
        clearInterval(intervalo);
      } else {
        setProgresso(1 - passado);
      }
    }, 50);
    return () => clearInterval(intervalo);
  }
}, [mostrarCard]);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={scrollContentStyle.scrollContent}>
      

      {mostrarCard && (
        <View style={styles.card}>
          <ProgressBar progress={progresso} style={{ marginBottom: 10 }} />
          <Button onPress={() => setMostrarCard(false)}>Fechar</Button>
        </View>
      )}

      <View>
        <Text style={styles.titulo}>Bom dia Matheus</Text>
      </View>

      <Divider style={styles.Divider} />

      <TextInput
        placeholder="Digite algo..."
        style={styles.bordaPesquisar}
      />

      <View style={styles.cardContainer}>

        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Home 2');
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Acessar seus Dados
        </Button>

        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Home 3')
            setMostrarCard(true);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          acessar comunicados
        </Button>

        <Button
          mode="contained"
          onPress={() => {
            escalaCard3.value = withSpring(0.9, {}, () => {
              escalaCard3.value = withSpring(1);
            });
            setMostrarCard(true);
            setProgresso(1);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Card 3
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            setMostrarCard(true);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Card 4
        </Button>
                <Ball>  </Ball>
          <Button
            mode="contained"
            onPress={() => setSecaoSelecionada(2)}
            style={[
              styles.bottonSectionTwo,
              secaoSelecionada === 2 && styles.BottonSectionPressed
            ]}
            labelStyle={styles.textoBotao}
          >
            Seção 2
          </Button>
          </View>
          <StatusBar style="auto" />
          </ScrollView>
            );
          }


