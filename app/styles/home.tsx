import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#407BFF',
    marginBottom: 32,
    textAlign: 'center',
  },
  progressContainer: {
    marginBottom: 40,
  },
  progressTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1e1e1e',
  },
  quantidadeTexto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  metaTexto: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
