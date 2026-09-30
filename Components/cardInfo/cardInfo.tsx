import { View, Text } from 'react-native';
import { cardInfoStyle } from './cardInfoStyle';

type Props = {
  titulo: string;
  descricao: string;
};

export default function CardInfo({ titulo, descricao }: Props) {
  return (
    <View style={cardInfoStyle.CardContent}>
      <Text style={cardInfoStyle.titulo}>{titulo}</Text>
      <Text style={cardInfoStyle.descricao}>{descricao}</Text>
    </View>
  );
}