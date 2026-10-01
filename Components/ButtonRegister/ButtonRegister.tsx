import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ButtonRegisterStyle';

export default function ButtonRegister() {
  return (
    <TouchableOpacity style={styles.buttonRegister}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  );
}