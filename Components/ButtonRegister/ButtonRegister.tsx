import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonRegisterStyle';

export default function ButtonRegister({ mode, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonRegister} onPress={onPress}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  );
}