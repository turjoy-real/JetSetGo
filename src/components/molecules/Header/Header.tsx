import {Button, Pressable, Text, View} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: '100%',
        paddingVertical: 10,
        marginHorizontal: 20,
      }}>
      <Pressable>
        <Text>Button</Text>
      </Pressable>
      <Text>Header</Text>
      <Pressable>
        <Text>Icon</Text>
      </Pressable>
    </View>
  );
};

export default Header;
