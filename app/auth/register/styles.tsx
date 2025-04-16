import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: '100%'
  },
  top: {
    flex: 0.5,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    width: '100%',
    marginTop: 40,
    
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#407BFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  inputEmail: {
    borderWidth: 0.1,
    borderColor: '#407BFF',
    borderRadius: 8,
    padding: 24,
    marginBottom: 40,
  },
  inputSenha: {
    borderWidth: 0.1,
    backgroundColor: '#F2F4F8',
    borderColor: '#407BFF',
    borderRadius: 8,
    padding: 24,
    marginBottom: 40,
  },
  forgotPassword: {
    color: '#407BFF',
    width: '100%',
    textAlign: 'right',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1C3F9B',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  link: {
    color: '#333',
    fontSize: 14,
    textDecorationLine:'underline',
  },
});
