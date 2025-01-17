import React, {FC} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import ConfirmationModalProps from '../../types/ConfirmationModalProps';


const ConfirmationModal: FC<ConfirmationModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
