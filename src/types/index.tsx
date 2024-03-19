import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Search: {
    to: string;
    from: string;
    departure: string;
    arrival: string;
    level: string;
  };
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

export type SearchRouteProps = RouteProp<RootStackParamList, 'Search'>;
