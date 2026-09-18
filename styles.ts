import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(241, 241, 241, 0.88)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 18,
    width: '100%',
    
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
  },

  botao: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 15,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  cardContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    fontSize: 16,
    width: '100%',
  },

  Divider: {
    height: 3.5,
    backgroundColor: '#ccc',
    marginVertical: 10,
    width: '100%',
  },

  card: {
  alignContent: 'center',
  position: 'absolute',
  top: 350,
  left: 100,
  right: 100,
  padding: 40,
  backgroundColor: 'white',
  borderRadius: 10,
  elevation: 50,
  zIndex: 10,
},
 bordaPesquisar: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 14,
  padding: 10,
  width: '100%',
  height: 50,
  
},

secoes: {
  flexDirection: 'row',
  width: '100%',
  gap: 10,
},

 bottonSectionOne: {
  top: 130,
  left: 20,
  right: 20,
  backgroundColor: 'rgb(117, 117, 117)',
  padding: 20,
  borderRadius: 15,
  marginTop: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
 },

 bottonSectionTwo: {
  top: 130,
  left: 20,
  right: 20,
  backgroundColor: 'rgb(117, 117, 117)',
  padding: 20,
  borderRadius: 15,
  marginTop: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
 },
 BottonSectionPressed: {
  top: 130,
  left: 20,
  right: 20,
  backgroundColor: '#3431ff',
  padding: 20,
  borderRadius: 15,
  marginTop: 40,
  shadowColor: 'rgb(247, 247, 247)',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
 },



 
  });