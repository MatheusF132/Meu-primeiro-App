import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonLoginStyle';

export default function ButtonLogin() {
  return (
    <TouchableOpacity style={styles.buttonLogin}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
}