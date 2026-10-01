import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import CardInfo from '../Components/cardInfo/cardInfo';
import { styles } from '../PageStyles/home3Style';

export default function Home3() {
  return (
    <ScrollView>
      <View style={styles.cardInfo}>
        <Text style={styles.titulo}>Comunicados</Text>
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
        <CardInfo titulo="Comunicado" descricao="ola mundo" />
      </View>
    </ScrollView>
  );
}