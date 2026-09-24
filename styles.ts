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
 Botao2: {
  backgroundColor: '#f39f21',
    padding: 20,
    borderRadius: 15,
    marginTop: 40,
    elevation: 5,
    top: 10,
    left: 5,
 },
  cardPerfil: {
    flex: 1,
    margin: 16,
    marginHorizontal: 0,
    marginVertical: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
fotoPerfil: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  borderWidth: 1,
  borderColor: '#ccc',
},

label: {
  fontSize: 18,
  color: '#888',
  marginTop: 12,
  alignSelf: 'flex-start',
  marginLeft: -75,
  left: 75,
  
},

valor: {
  fontSize: 18,
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  marginLeft: -65,
  left: 65,
  

},

senhaRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 8,
},

eyeButton: {
  marginLeft: 10,
  padding: 4,
},

 imageContainer: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 'auto',
  paddingTop: 12,
},

 containerPerfil: {
    flex: 1,
    backgroundColor: 'rgba(241, 241, 241, 0.88)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
    fontSize: 18,
  },
  containerImage: {
    width: 220,
    height: 180,
    resizeMode: 'contain',
  },

  cameraButton: {
    marginLeft:260,
    top: -135,
  },
  
  });