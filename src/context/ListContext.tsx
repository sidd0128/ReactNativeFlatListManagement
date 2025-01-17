import React, { createContext, useState, useCallback, useEffect, FC } from 'react';
import ListContextType from '../types/ListContextType';
import ListProviderProps from '../types/ListProviderProps';
import ListItem from '../types/ListItem';

export const ListContext = createContext<ListContextType | undefined>(undefined);


export const ListProvider: FC<ListProviderProps> = ({ children }) => {
  const [mainList, setMainList] = useState<ListItem[]>([]);
  const [archivedList, setArchivedList] = useState<ListItem[]>([]);

  useEffect(() => {
    // Simulate API call to fetch initial data
    const fetchData = async () => {
      const initialData = [
        { id: '1', text: 'First Item' },
        { id: '2', text: 'Second Item' },
        { id: '3', text: 'Third Item' },
      ];
      setMainList(initialData);
    };
    fetchData();
  }, []);

  const archiveItem = useCallback((itemId: string) => {
    setMainList((prev) => prev.filter((item) => item.id !== itemId));
    setArchivedList((prev) => [
      ...prev,
      ...mainList.filter((item) => item.id === itemId),
    ]);
  }, [mainList]);

  const unarchiveItem = useCallback((itemId: string) => {
    setArchivedList((prev) => prev.filter((item) => item.id !== itemId));
    setMainList((prev) => [
      ...prev,
      ...archivedList.filter((item) => item.id === itemId),
    ]);
  }, [archivedList]);

  const deleteItem = useCallback((itemId: string) => {
    setMainList((prev) => prev.filter((item) => item.id !== itemId));
    setArchivedList((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  return (
    <ListContext.Provider
      value={{
        mainList,
        archivedList,
        setMainList,
        archiveItem,
        unarchiveItem,
        deleteItem,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
