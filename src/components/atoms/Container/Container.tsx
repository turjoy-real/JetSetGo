import {ReactNode} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../molecules/Header/Header';

const Container = ({children}: {children: ReactNode}) => {
  return (
    // <SafeAreaView>
    <LinearGradient
      colors={['#d4477e', '#550617']}
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}>
      <Header />
      <Image
        source={require('../../../assets/images/world.png')}
        resizeMode="contain"
        style={styles.image}
        blurRadius={0.7}
      />

      {children}
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
  },
  image: {
    // position: 'absolute',
    top: 30,
  },
});
