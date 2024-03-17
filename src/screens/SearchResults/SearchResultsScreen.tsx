import {Text, View} from 'react-native';
import Container from '../../components/atoms/Container/Container';
import {SearchNavProps} from '../../types';
import {useEffect} from 'react';

const SearchResults = ({navigation}: {navigation: SearchNavProps}) => {
  useEffect(() => navigation.addListener('focus', () => {}), [navigation]);
  return (
    <Container>
      <View style={{flex: 1}}>
        <View style={{opacity: 1}}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 10,
              padding: 10,
              margin: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '400',
                margin: 5,
              }}>
              Delhi to Bangalore
            </Text>
            <View style={{flexDirection: 'row', margin: 5, opacity: 0.5}}>
              <Text style={{color: 'white'}}>Economy Class</Text>
              <Text style={{color: 'white'}}> • </Text>
              <Text style={{color: 'white'}}>1 Adult</Text>
            </View>
            <View
              style={{
                height: 0.8,
                backgroundColor: 'white',
                margin: 5,
                opacity: 0.5,
              }}
            />
            <Text style={{color: 'white', margin: 5, opacity: 0.5}}>
              Friday, 23rd June 2023
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 5,
            padding: 10,
            margin: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Delhi</Text>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}>
            <Text>○</Text>

            <Text>------------</Text>

            <Text>○</Text>
          </View>
          <Text>Bengalore</Text>
        </View>
      </View>
    </Container>
  );
};

export default SearchResults;
