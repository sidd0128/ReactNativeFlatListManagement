import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  archivedSection: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginBottom: 10,
  },
  archivedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  archivedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  archivedItem: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginVertical: 5,
    borderRadius: 5,
  },
  archivedItemText: {
    fontSize: 14,
    color: '#333',
  },
  viewAllArchivedButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  viewAllArchivedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default styles;
