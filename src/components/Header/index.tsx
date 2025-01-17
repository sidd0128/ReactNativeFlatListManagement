import React, {FC} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import HeaderProps from '../../types/HeaderProps';



const Header: FC<HeaderProps> = ({ title, onDelete }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {onDelete && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
