import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#407BFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 60,
  },
  loginButton: {
    backgroundColor: '#407BFF',
    borderRadius: 8,
    width: '40%',
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  registerButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    width: '40%',
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  }
});
