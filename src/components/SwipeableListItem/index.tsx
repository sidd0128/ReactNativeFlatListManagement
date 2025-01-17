import React, { useContext, FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import styles from './styles';
import { ListContext } from '../../context/ListContext';
import SwipeableListItemProps from '../../types/SwipeableListItemProps';

const SwipeableListItem: FC<SwipeableListItemProps> = ({
  item,
  isArchived,
  isSelected,
  isSelectionMode,
  onPress,
  onLongPress,
  onDelete,
}) => {
  const listContext = useContext(ListContext);
  if (!listContext) throw new Error("ListContext is undefined");

  const { archiveItem, unarchiveItem } = listContext;

  const renderActions = (type: 'archive' | 'unarchive') => (
    <View style={styles.actionsContainer}>
      {type === 'archive' ? (
        <TouchableOpacity
          style={[styles.actionButton, styles.archiveButton]}
          onPress={() => archiveItem(item.id)}
        >
          <Text style={styles.actionText}>Archive</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.actionButton, styles.unarchiveButton]}
          onPress={() => unarchiveItem(item.id)}
        >
          <Text style={styles.actionText}>Unarchive</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteButton]}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={() => renderActions(isArchived ? 'unarchive' : 'archive')}
        enabled={!isSelectionMode}
      >
        <TouchableOpacity
          style={[
            styles.listItemContainer,
            isSelected && styles.selectedItemContainer,
          ]}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <Text style={styles.listItemText}>{item.text}</Text>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeableListItem;
