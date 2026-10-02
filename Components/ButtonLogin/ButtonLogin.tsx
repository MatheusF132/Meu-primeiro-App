import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonLoginStyle';

export default function ButtonLogin({ onPress, style, children }: { onPress: () => void; style?: any; children?: React.ReactNode }) {
  return (
    <TouchableOpacity style={[styles.buttonLogin, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children ?? 'Entrar'}</Text>
    </TouchableOpacity>
  );
}