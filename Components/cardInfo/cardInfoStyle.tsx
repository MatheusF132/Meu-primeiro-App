import { StyleSheet } from 'react-native';

export const cardInfoStyle = StyleSheet.create({
  title: {
    top: 2,
    left: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },
  CardContent: {
    top: 100,
    height: 100,
    width: '80%',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'hsla(36, 100%, 32%, 0.88)',
    backgroundColor: 'rgba(253, 253, 253, 0.88)',
    marginBottom: 40,
  },

  description: {
    top: 2,
    left: 10,
    fontSize: 18,
    color: 'rgb(0, 0, 0)',
  },
});