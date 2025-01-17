import ListItem from './ListItem';

interface ListContextType {
    mainList: ListItem[];
    archivedList: ListItem[];
    setMainList: React.Dispatch<React.SetStateAction<ListItem[]>>;
    archiveItem: (itemId: string) => void;
    unarchiveItem: (itemId: string) => void;
    deleteItem: (itemId: string) => void;
  }
  export default ListContextType;
