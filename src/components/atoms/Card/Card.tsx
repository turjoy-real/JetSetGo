import {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}: {children: ReactNode}) => {
  return (
    <View
      style={{
        borderWidth: 0.8,
        borderColor: '#bb6c86',
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
      }}>
      {children}
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({});
