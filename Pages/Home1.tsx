import { 
  View, 
  TextInput, 
  ScrollView, 
  Text, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { styles } from '../PageStyles/Home1Style';
import ButtonLogin from '../Components/ButtonLogin/ButtonLogin';
import ButtonRegister from '../Components/ButtonRegister/ButtonRegister';
import { useHeaderHeight } from '@react-navigation/elements';

export default function Home1({ navigation }: any) {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: '#FFFFFF' }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
    >
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          padding: 20, 
          justifyContent: 'center'
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.welcomeText}>Seja Bem-vindo!</Text>
        
        <ButtonLogin onPress={navigation.navigate.bind(navigation, 'Home')} style={{ top: 350 }} />

        <TextInput
          placeholder="Insira seu Email"
          placeholderTextColor="#888"
          style={styles.bordaPesquisar}
        />
            <TextInput
          placeholder="Insira Sua senha"
          placeholderTextColor="#888"
          style={styles.bordaPesquisar}
        />
        <ButtonRegister
        mode="contained"
        onPress={() => navigation.navigate('Home 5')}
         />
        <Text style={styles.informerText}>
          Ainda não possue uma conta?   --
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}