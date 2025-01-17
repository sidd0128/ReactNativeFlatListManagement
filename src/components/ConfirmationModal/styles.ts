import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      width: '80%',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    confirmButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
    },
    cancelButton: {
      backgroundColor: '#F44336',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default styles;
