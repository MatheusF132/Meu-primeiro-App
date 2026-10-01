import { View, TextInput, ScrollView, Text } from 'react-native';
import { styles } from '../PageStyles/Home1Style';
import ButtonLogin from '../Components/ButtonLogin/ButtonLogin';
import ButtonRegister from '../ButtonRegister/ButtonRegister';

export default function Home1() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.welcomeText}> Seja Bem-vindo! </Text>
        <ButtonLogin />

        <TextInput
          placeholder="Insira seu Email"
          style={styles.bordaPesquisar}
        />
        <ButtonRegister />
      </View>
    </ScrollView>
  );
}