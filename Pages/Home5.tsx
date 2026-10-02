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


export default function Home5({ navigation }: any) {
  const headerHeight = useHeaderHeight();

  return (
 <KeyboardAvoidingView 
      style={{ flex: 1, backgroundColor: '#FFFFFF' }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}
    >
    <ScrollView>
        <Text style={styles.welcomeText}>Hora de se Cadastrar !!</Text>

        <TextInput
                  placeholder="Insira Seu nome completo"
                  placeholderTextColor="#888"
                  style={styles.bordaPesquisar}
                />
        <TextInput
                  placeholder="Insira seu Email"
                  placeholderTextColor="#888"
                  style={styles.bordaPesquisar}
                        />
        <TextInput
                  placeholder="Crie Sua senha"
                  placeholderTextColor="#888"
                  style={styles.bordaPesquisar}
                />
        <TextInput
                  placeholder="Confirme Sua senha"
                  placeholderTextColor="#888"
                  style={styles.bordaPesquisar}
                />
                <ButtonLogin onPress={navigation.navigate.bind(navigation, 'Home')} style={{ top: 140, }} >
                    Cadastrar
                </ButtonLogin>

                


  
    </ScrollView>
    </KeyboardAvoidingView>



  );
}