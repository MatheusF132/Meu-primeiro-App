import { styles } from './styles';
import { Button, Divider, Card, IconButton } from 'react-native-paper';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TextInput } from "react-native";
import Animated, { useSharedValue } from 'react-native-reanimated';
import Home2 from './Home2';

export default function HomeScreen({ navigation }: any) {
  const [secaoSelecionada, setSecaoSelecionada] = useState(1);
  const [mostrarCard, setMostrarCard] = useState(false);
  const width = useSharedValue(100);

  return (
    <View style={styles.container}>
      

      {mostrarCard && (
        <View style={styles.card}>
          <Button onPress={() => setMostrarCard(false)}>
            Fechar
          </Button>
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
            setMostrarCard(true);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Card 1
        </Button>

        <Button
          mode="contained"
          onPress={() => {
            console.log('Botão pressionado!');
            setMostrarCard(true);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Card 2
        </Button>

        <Button
          mode="contained"
          onPress={() => {
            console.log('Botão pressionado!');
            setMostrarCard(true);
          }}
          style={styles.botao}
          labelStyle={styles.textoBotao}
        >
          Card 3
        </Button>

        <View style={styles.secoes}>

          <Button
            mode="contained"
            onPress={() => setSecaoSelecionada(1)}
            style={[
              styles.bottonSectionOne,
              secaoSelecionada === 1 && styles.BottonSectionPressed
            ]}
            labelStyle={styles.textoBotao}
          >
            Seção 1
          </Button>

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

      </View>

      <StatusBar style="auto" />

    </View>
  );
}
