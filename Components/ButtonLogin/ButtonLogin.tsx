import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonLoginStyle';

export default function ButtonLogin({ mode, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonLogin} onPress={onPress}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
}