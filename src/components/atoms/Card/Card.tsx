import {BlurView} from '@react-native-community/blur';
import {ReactNode} from 'react';
import {View, Platform, StyleSheet, ImageBackground} from 'react-native';

const Card = ({children}: {children: ReactNode}) => {
  return (
    <View
      style={{
        // shadowColor: '#fff',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,

        // elevation: 3,

        borderWidth: 0.8,
        borderColor: '#bb6c86',
        borderRadius: 5,
        margin: 10,

        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
      }}>
      {/* <BlurView
        blurType="light"
        blurAmount={1}
        blurRadius={1}
        style={{
          width: 'auto',
          height: 'auto',
          borderRadius: 5,
          padding: 10,
          borderColor: 'rgba(255, 255, 255, 0.4)',
          justifyContent: 'center',
        }}
      /> */}

      {children}
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({});
