import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Search: undefined;
  InputDetails: undefined;
  ChooseSeats: undefined;
  Profile: undefined;
};

export type MainNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

export type SearchNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;
