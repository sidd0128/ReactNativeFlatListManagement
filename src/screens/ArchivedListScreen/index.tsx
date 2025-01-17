import React, { useContext, FC } from 'react';
import { FlatList, View } from 'react-native';
import { ListContext } from '../../context/ListContext';
import SwipeableListItem from '../../components/SwipeableListItem';
import styles from './styles';

const ArchivedListScreen: FC = () => {
  const listContext = useContext(ListContext);
  if (!listContext) throw new Error("ListContext is undefined");

  const { archivedList } = listContext;

  return (
    <View style={styles.container}>
      <FlatList
        data={archivedList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SwipeableListItem
            item={item}
            isArchived={true}
          />
        )}
      />
    </View>
  );
};


export default ArchivedListScreen;
