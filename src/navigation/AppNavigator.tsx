import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types';

import Main from '../screens/Main/MainScreen';
import SearchResults from '../screens/SearchResults/SearchResultsScreen';
import PassengerDetails from '../screens/PassengerDetails/PassengerDetailsScreen';
import ChooseSeats from '../screens/ChooseSeats/ChooseSeatsScreen';
import Profile from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Search" component={SearchResults} />
        <Stack.Screen name="InputDetails" component={PassengerDetails} />
        <Stack.Screen name="ChooseSeats" component={ChooseSeats} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
