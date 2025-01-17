import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItemContainer: {
      padding: 15,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    listItemText: {
      fontSize: 16,
    },
    actionsContainer: {
      flexDirection: 'row',
    },
    actionButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      height: '100%',
    },
    archiveButton: {
      backgroundColor: '#4CAF50',
    },
    unarchiveButton: {
      backgroundColor: '#2196F3',
    },
    deleteButton: {
      backgroundColor: '#F44336',
    },
    actionText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    selectedItemContainer: {
      backgroundColor: '#d1e7dd', // Light green background for selected items
      borderColor: '#218838', // Green border for selected items
      borderWidth: 1,
    },
  });

  export default styles;
