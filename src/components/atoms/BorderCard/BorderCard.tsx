import {ReactNode} from 'react';
import {View} from 'react-native';

const BorderCard = ({children}: {children: ReactNode}) => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderWidth: 0.8,
        borderColor: 'white',
      }}>
      {children}
    </View>
  );
};

export default BorderCard;
