import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#407BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  rankingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  userRankingItem: {
    backgroundColor: '#E3F2FD',
    borderWidth: 1,
    borderColor: '#407BFF',
  },
  position: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#407BFF',
    width: 40,
  },
  name: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#407BFF',
    width: 100,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 20,
  },
});