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

export default function Home1() {
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: '#FFFFFF' }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
        
        <ButtonLogin />

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
        <ButtonRegister />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}