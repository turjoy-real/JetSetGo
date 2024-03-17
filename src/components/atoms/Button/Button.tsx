import {TouchableOpacity, Text} from 'react-native';

const Button = (props: any) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#d4477e',
        margin: 10,
        alignItems: 'center',
      }}
      onPress={props.onPress}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
