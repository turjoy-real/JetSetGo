import {Button, Pressable, Text, View} from 'react-native';

const Header = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '100%',
        paddingVertical: 10,
        marginHorizontal: 20,
      }}>
      {props.leftButton}
      <Text style={{fontSize: 24, fontWeight: '500', color: 'white'}}>
        {props.header}
      </Text>
      {props.rightButton}
    </View>
  );
};

export default Header;
