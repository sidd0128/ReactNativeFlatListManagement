import React, { useContext, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { ListContext } from '../../context/ListContext';
import Header from '../../components/Header';
import SwipeableListItem from '../../components/SwipeableListItem';
import ConfirmationModal from '../../components/ConfirmationModal';
import RootStackParamList from '../../types/RootStackParamList';

const MainListScreen: React.FC = () => {
  const listContext = useContext(ListContext);
  if (!listContext) throw new Error("ListContext is undefined");

  const { mainList, archivedList, deleteItem } = listContext;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelectionMode = () => {
    setIsSelectionMode((prev) => !prev);
    setSelectedItems([]);
  };

  const toggleItemSelection = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  const handleMultiDelete = () => {
    selectedItems.forEach((itemId) => deleteItem(itemId));
    setSelectedItems([]);
    setIsSelectionMode(false);
  };

  const handleDelete = (itemId: string) => {
    setItemToDelete(itemId);
    setIsModalVisible(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) deleteItem(itemToDelete);
    setItemToDelete(null);
    setIsModalVisible(false);
  };

  const cancelDelete = () => {
    setItemToDelete(null);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header title="Main List" onDelete={isSelectionMode ? handleMultiDelete : ()=> {}} />

      {/* Archived Items Section */}
      {archivedList.length > 0 && (
        <View style={styles.archivedSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ArchivedList')}
            style={styles.archivedHeader}
          >
            <Text style={styles.archivedText}>
              {'Show Archived Items'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main List */}
      <FlatList
        data={mainList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeableListItem
            item={item}
            isArchived={false}
            isSelected={selectedItems.includes(item.id)}
            isSelectionMode={isSelectionMode}
            onLongPress={() => {
              if (!isSelectionMode) {
                toggleSelectionMode();
                toggleItemSelection(item.id);
              }
            }}
            onPress={() => {
              if (isSelectionMode) {
                toggleItemSelection(item.id);
              }
            }}
            onDelete={handleDelete}
          />
        )}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        visible={isModalVisible}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </View>
  );
};

export default MainListScreen;
