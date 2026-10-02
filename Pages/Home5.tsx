import { 
  View, 
  TextInput, 
  ScrollView, 
  Text, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { styles } from '../PageStyles/Home5Style';
import ButtonLogin from '../Components/ButtonLogin/ButtonLogin';
import ButtonRegister from '../Components/ButtonRegister/ButtonRegister';
import { useHeaderHeight } from '@react-navigation/elements';

export default function Home5({ navigation }: any) {
  const headerHeight = useHeaderHeight();

  return (
    <View>
        <Text> Ola mundo 5</Text>


    </View>



  );
}