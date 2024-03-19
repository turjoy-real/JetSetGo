import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
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
import moment from 'moment';

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
const classes = ['Economy', 'Premium'];

const Main = ({navigation}: {navigation: MainNavProps}) => {
  const [tripType, setTripType] = useState(TripType.OneWay);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState('from');

  const [level, setlevel] = useState('Economy');

  const [from, setFrom] = useState('');

  const [to, setTo] = useState('');

  const currentDate = new Date();

  const [departure, setDeparture] = useState(currentDate);

  const [arrival, setArrival] = useState(currentDate);

  useEffect(() => navigation.addListener('focus', () => {}), [navigation]);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    if (list === 'departure') {
      setDeparture(selectedDate);
    }

    if (list === 'arrival') {
      setArrival(selectedDate);
    }
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <Container header="" leftButton rightButton>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {cities.map((city, index) => (
              <Pressable
                key={index}
                style={{margin: 6}}
                onPress={() => {
                  if (list === 'from') {
                    setFrom(city);
                  } else {
                    setTo(city);
                  }

                  setModalVisible(false);
                }}>
                <Text style={styles.modalText}>{city}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
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
              <Pressable
                onPress={() => {
                  setList('from');
                  setModalVisible(true);
                }}>
                <Text style={{margin: 10, color: 'rgba(255,255,255,0.8)'}}>
                  {from}
                </Text>
              </Pressable>

              <View
                style={{height: 1, borderRadius: 20, backgroundColor: 'white'}}
              />
              <Pressable
                onPress={() => {
                  setList('to');
                  setModalVisible(true);
                }}>
                <Text style={{margin: 10, color: 'rgba(255,255,255,0.8)'}}>
                  {to}
                </Text>
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                let tmp = to;
                setTo(from);
                setFrom(tmp);
              }}
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
            </Pressable>
          </View>
        </BorderCard>
        <BorderCard>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              setList('departure');
              showMode('date');
            }}>
            <Calender />
            <Text style={{color: 'white', marginHorizontal: 10}}>
              {moment(departure).format('DD/MM/YYYY')}
            </Text>
          </Pressable>
        </BorderCard>
        {tripType === TripType.RoundTrip && (
          <BorderCard>
            <Pressable
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                setList('arrival');
                showMode('date');
              }}>
              <Calender />
              <Text style={{color: 'white', marginHorizontal: 10}}>
                {moment(arrival).format('DD/MM/YYYY')}
              </Text>
            </Pressable>
          </BorderCard>
        )}
        <BorderCard>
          <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
            <SvgXml xml={Seat} width={24} height={24} />
            <Text style={{color: 'white', marginHorizontal: 10}}>Economy</Text>
          </Pressable>
        </BorderCard>
        <Button
          onPress={() => {
            navigation.navigate('Search', {
              to,
              from,
              departure: moment(departure).toISOString(),
              arrival: moment(arrival).toISOString(),
              level,
            });
          }}
          text={'Search'}
        />
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Main;
