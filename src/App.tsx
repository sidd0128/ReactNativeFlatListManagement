import React, {FC} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProvider from './context/ListContext';
import MainListScreen from './screens/MainScreen';
import ArchivedListScreen from './screens/ArchivedListScreen';
import RootStackParamList from './types/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <ListProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainList" component={MainListScreen} />
          <Stack.Screen name="ArchivedList" component={ArchivedListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ListProvider>
  );
};

export default App;