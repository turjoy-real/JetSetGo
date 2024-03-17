import {Pressable, Text, View} from 'react-native';
import Container from '../../components/atoms/Container/Container';
import Card from '../../components/atoms/Card/Card';
import {useEffect, useState} from 'react';
import TripType from '../../enums/tripType';
import BorderCard from '../../components/atoms/BorderCard/BorderCard';
import Plane from '../../assets/svgs/Plane';
import Calender from '../../assets/svgs/Calender';
import Seat from '../../assets/svgs/Seat';
import {SvgXml} from 'react-native-svg';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import Button from '../../components/atoms/Button/Button';
import Reverse from '../../assets/svgs/Reverse';
import {MainNavProps} from '../../types';

const Main = ({navigation}: {navigation: MainNavProps}) => {
  const [tripType, setTripType] = useState(TripType.OneWay);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  useEffect(() => navigation.addListener('focus', () => {}), [navigation]);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Container>
      {show && (
        <RNDateTimePicker
          display="spinner"
          testID="dateTimePicker"
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
      <Card>
        <View
          style={{
            margin: 10,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 5,
            flexDirection: 'row',
          }}>
          <Pressable
            onPress={() => {
              setTripType(TripType.OneWay);
            }}
            style={{
              backgroundColor:
                tripType === TripType.OneWay
                  ? 'rgba(255,255,255,0.8)'
                  : 'rgba(255,255,255,0.0)',
              borderRadius: 5,
              paddingHorizontal: 40,
              padding: 5,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: tripType === TripType.OneWay ? 'black' : 'white',
                textAlign: 'center',
              }}>
              One Way
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setTripType(TripType.RoundTrip)}
            style={{
              backgroundColor:
                tripType === TripType.RoundTrip
                  ? 'rgba(255,255,255,0.8)'
                  : 'rgba(255,255,255,0.0)',
              borderRadius: 5,
              paddingHorizontal: 40,
              padding: 5,
              width: '50%',
            }}>
            <Text
              style={{
                color: tripType === TripType.RoundTrip ? 'black' : 'white',
                textAlign: 'center',
              }}>
              Round trip
            </Text>
          </Pressable>
        </View>
        <BorderCard>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginRight: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  margin: 5,

                  transform: [{rotate: '-90deg'}],
                }}>
                <Plane />
              </View>
              <View
                style={{
                  borderStyle: 'dotted',
                  borderWidth: 1,
                  borderRadius: 1,
                  width: 0.4,
                  height: 20,
                  borderColor: 'gray',
                }}
              />
              <View
                style={{
                  margin: 5,

                  transform: [{rotate: '+90deg'}],
                }}>
                <Plane />
              </View>
            </View>

            <View style={{flex: 8}}>
              <Text style={{margin: 10, color: 'rgba(255,255,255,0.8)'}}>
                Delhi
              </Text>
              <View
                style={{height: 1, borderRadius: 20, backgroundColor: 'white'}}
              />
              <Text style={{margin: 10, color: 'rgba(255,255,255,0.8)'}}>
                Bengaluru
              </Text>
            </View>
            <View
              style={{
                padding: 5,
                backgroundColor: 'rgba(255,255,255,0.6)',
                borderRadius: 20,
                margin: 5,
              }}>
              <SvgXml
                xml={Reverse}
                width={24}
                height={24}
                style={{
                  transform: [{rotate: '+90deg'}, {scale: 0.6}],
                }}
              />
            </View>
          </View>
        </BorderCard>
        <BorderCard>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={showDatepicker}>
            <Calender />
            <Text style={{color: 'white', marginHorizontal: 10}}>
              Departure Date
            </Text>
          </Pressable>
        </BorderCard>
        {tripType === TripType.RoundTrip && (
          <BorderCard>
            <Pressable
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={showDatepicker}>
              <Calender />
              <Text style={{color: 'white', marginHorizontal: 10}}>
                Arrival Date
              </Text>
            </Pressable>
          </BorderCard>
        )}
        <BorderCard>
          <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={Seat} width={24} height={24} />
            <Text style={{color: 'white', marginHorizontal: 10}}>
              Select Class
            </Text>
          </Pressable>
        </BorderCard>
        <Button
          onPress={() => {
            navigation.navigate('Search');
          }}
          text={'Search'}
        />
      </Card>
    </Container>
  );
};

export default Main;
