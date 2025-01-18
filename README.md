# Project Overview

This project is a React Native application that provides a list management system. It allows users to view, add, archive, unarchive, and delete items. Items can be marked as archived and viewed separately. The application utilizes Context API for state management and GestureHandler for swipe actions.

## Project Structure

The project is structured as follows:

```
/src
  /components
    - ConfirmationModal.tsx
    - Header.tsx
    - SwipeableListItem.tsx
  /context
    - ListContext.tsx
  /screens
    - ArchivedListScreen.tsx
    - MainScreen.tsx
  /types
    - ListContextType.ts
    - ListItem.ts
    - RootStackParamList.ts
    - SwipeableListItemProps.ts
    - HeaderProps.ts
    - ConfirmationModalProps.ts
  App.tsx
```

### Breakdown of Files

1. **App.tsx**:
   - The entry point of the application. It wraps the navigation container and includes the `ListProvider` to manage the global state of the lists (main and archived).

2. **ListContext.tsx**:
   - Defines the `ListContext` and provides a context for managing the main and archived lists using React's Context API. It provides functions to manipulate the lists such as `archiveItem`, `unarchiveItem`, and `deleteItem`.

3. **MainScreen.tsx**:
   - This is the screen that displays the main list items. It includes a `FlatList` to render the list and functionality for deleting, archiving, and selecting items. A swipeable item component (`SwipeableListItem`) is used for performing swipe actions such as archiving and deleting.

4. **ArchivedListScreen.tsx**:
   - This screen displays the archived items using a `FlatList`. It provides a UI for unarchiving items.

5. **Reusable Components**:
   - **Header.tsx**: This component is used across different screens. It displays the title and a delete button (if applicable).
   - **SwipeableListItem.tsx**: This is a reusable list item component that can be swiped for actions (archiving, unarchiving, deleting).
   - **ConfirmationModal.tsx**: This modal component is used to confirm deletion actions. It pops up when the user tries to delete an item.

### Context API for Global State Management

The `ListContext` uses React’s Context API to manage the state for the main and archived lists. It provides a central place for all the logic related to list management. The following functions are defined within the `ListContext`:

- `archiveItem`: Moves an item from the main list to the archived list.
- `unarchiveItem`: Moves an item from the archived list back to the main list.
- `deleteItem`: Deletes an item from both lists.

### SwipeableListItem Component

The `SwipeableListItem` component uses `react-native-gesture-handler` to enable swipe actions (archiving, unarchiving, and deleting items). It accepts the following props:
- `item`: The item object to be rendered.
- `isArchived`: A boolean indicating if the item is archived.
- `isSelected`: A boolean indicating if the item is selected in selection mode.
- `isSelectionMode`: A boolean indicating if multi-selection mode is enabled.
- `onPress`: Function to be called when the item is pressed.
- `onLongPress`: Function to be called when the item is long-pressed.
- `onDelete`: Function to be called to delete the item.

### Main List and Archived List Screens

- **Main List**: Displays a list of items with options to delete, archive, or multi-select items. The user can swipe items to perform these actions.
- **Archived List**: Displays a list of archived items. Archived items can be unarchived back to the main list.

### Modal for Deletion Confirmation

The `ConfirmationModal` component is used for confirming item deletions. This modal is displayed when the user tries to delete an item. The modal includes two buttons: "Yes" (to confirm deletion) and "No" (to cancel the action).

## Key Functions and Components

### ListProvider (Context)

```tsx
const [mainList, setMainList] = useState<ListItem[]>([]);
const [archivedList, setArchivedList] = useState<ListItem[]>([]);
```
- The `ListProvider` manages the state of the `mainList` and `archivedList`. These states are used globally in the application through the Context API.

### Archive and Unarchive Items

#### Archive Item

```tsx
const archiveItem = useCallback((itemId: string) => {
  setMainList((prev) => {
    const itemIndex = prev.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) return prev;

    const itemToArchive = { ...prev[itemIndex], originalIndex: itemIndex };
    setArchivedList((archivedPrev) => [...archivedPrev, itemToArchive]);

    return prev.filter((_, index) => index !== itemIndex);
  });
}, []);
```
- The `archiveItem` function moves an item from the main list to the archived list. It also stores the original index of the item in the `originalIndex` property. This ensures that when the item is unarchived, it can be placed back in its original position in the main list.

#### Unarchive Item

```tsx
const unarchiveItem = useCallback((itemId: string) => {
  setArchivedList((prev) => {
    const itemIndex = prev.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) return prev;

    const itemToUnarchive = { ...prev[itemIndex] };
    prev.splice(itemIndex, 1);
    setMainList((mainPrev) => {
      const updatedMainList = [...mainPrev];
      if (itemToUnarchive.originalIndex !== undefined) {
        updatedMainList.splice(itemToUnarchive.originalIndex, 0, itemToUnarchive);
      } else {
        updatedMainList.push(itemToUnarchive);
      }
      return updatedMainList;
    });

    return [...prev];
  });
}, []);
```
- The `unarchiveItem` function restores an item from the archived list to the main list. If the item has an `originalIndex`, it will be placed back in its original position in the main list. Otherwise, it will be added to the end of the list.

### SwipeableListItem Actions

```tsx
<Swipeable renderRightActions={() => renderActions(isArchived ? 'unarchive' : 'archive')} >
```
- The `SwipeableListItem` component uses the `Swipeable` component from `react-native-gesture-handler` to handle swipe actions. Depending on whether the item is archived or not, the right swipe action will either archive or unarchive the item.

### Deletion Logic

```tsx
<ConfirmationModal visible={isModalVisible} onConfirm={confirmDelete} onCancel={cancelDelete} />
```
- The `ConfirmationModal` component is used to confirm deletions before they are performed.

## Conclusion

This project showcases how to manage a list of items with archiving, unarchiving, deletion, and multi-selection features. The use of Context API for state management and GestureHandler for swipe actions makes the app interactive and responsive. Each component is reusable and follows the best practices of component-based architecture.