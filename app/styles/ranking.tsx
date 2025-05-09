import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#407BFF',
    marginBottom: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 30,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  rankingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#407BFF',
    width: 40,
  },
  name: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  divider: {
    borderBottomColor: '#aaaaaa', 
    borderBottomWidth: 2,         
    borderRadius: 5,
    marginVertical: 10,           
    width: '100%',
    marginBottom: 80,
  }
});
