import ListItem from './ListItem';

interface SwipeableListItemProps {
  item: ListItem;
  isArchived: boolean;
  isSelected?: boolean; // Added for selection tracking
  isSelectionMode?: boolean; // Added to check if selection mode is active
  onPress?: () => void; // Called when tapping on an item to select/deselect
  onLongPress?: () => void; // Called when long pressing to enter selection mode
  onDelete?: (id: string) => void; // Called for deleting the item
}
  export default SwipeableListItemProps;
