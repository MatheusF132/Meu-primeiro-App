import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#007AFF', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    top: 350,
    shadowColor: '#E31561',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});