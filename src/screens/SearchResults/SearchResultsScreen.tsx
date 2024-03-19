import {Pressable, StyleSheet, Text, View, FlatList} from 'react-native';
import Container from '../../components/atoms/Container/Container';
import {SearchNavProps, SearchRouteProps} from '../../types';
import BlackPlane from '../../assets/svgs/BlackPlane';
import Arrow from '../../assets/svgs/Arrow';
import {SvgXml} from 'react-native-svg';
import Filter from '../../assets/svgs/Filter';
import moment from 'moment';
import data from '../../constants/data';

const SearchResults = ({
  navigation,
  route,
}: {
  navigation: SearchNavProps;
  route: SearchRouteProps;
}) => {
  const params = route.params;

  let arr = [];

  for (let item of data) {
    const date1 = moment(item.departureTime);
    const date2 = moment(params.departure);

    if (
      item.origin === params.from &&
      item.destination === params.to &&
      date1.format('DD-MM-YYYY') === date2.format('DD-MM-YYYY')
    ) {
      arr.push(item);
    }
  }

  const HeaderButton = () => {
    return (
      <Pressable
        style={{transform: [{rotate: '180deg'}, {scale: 1.2}]}}
        onPress={() => navigation.goBack()}>
        <SvgXml
          xml={Arrow}
          width={24}
          height={24}
          style={{
            transform: [{rotate: '+90deg'}, {scale: 0.6}],
          }}
        />
      </Pressable>
    );
  };

  const FilterButton = () => {
    return (
      <Pressable
        style={{transform: [{rotate: '-90deg'}, {scale: 1.5}]}}
        onPress={() => navigation.goBack()}>
        <SvgXml
          xml={Filter}
          width={24}
          height={24}
          style={{
            transform: [{rotate: '+90deg'}, {scale: 0.6}],
          }}
        />
      </Pressable>
    );
  };

  const renderUI = ({
    item,
  }: {
    item: {
      id: number;
      gate: string;
      price: number;
      origin: string;
      airline: string;
      aircraft: string;
      duration: string;
      arrivalTime: string;
      destination: string;
      flightNumber: string;
      departureTime: string;
      seatsAvailable: number;
    };
  }) => {
    return (
      <View
        style={{
          margin: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={{margin: 5}}>{item.airline}</Text>
            <Text style={{margin: 5}}>{item.flightNumber}</Text>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'grey',
              borderRadius: 20,
              margin: 10,
            }}
          />
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'black',
                }}>
                {item.origin}
              </Text>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 14,
                  fontWeight: '200',
                  color: 'gray',
                }}>
                {moment(item.departureTime).format('HH:MM a')}
              </Text>
            </View>

            <View style={styles.dot} />
            <View style={styles.line} />
            <View style={{position: 'absolute', zIndex: 10}}>
              <BlackPlane />
            </View>

            <View style={styles.dot} />
            <View>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'black',
                }}>
                {item.destination}
              </Text>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 14,
                  fontWeight: '200',
                  color: 'gray',
                  textAlign: 'right',
                }}>
                {moment(item.arrivalTime).format('HH:MM a')}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'grey',
              borderRadius: 20,
              margin: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{margin: 5}}>
              <Text>Included:</Text>
              <Text>Personal Items, Cabin Bag</Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 22, color: 'black'}}>₹ {item.price}</Text>
              <Text style={{textAlign: 'right'}}>Economy</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container
      header="Search Results"
      leftButton={<HeaderButton />}
      rightButton={<FilterButton />}>
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
              {params.from} to {params.to}
            </Text>
            <View style={{flexDirection: 'row', margin: 5, opacity: 0.5}}>
              <Text style={{color: 'white'}}>{params.level}</Text>
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
              {/* Friday, 23rd June 2023 */}
              {moment(params.departure).format('dddd, Do MMMM YYYY')}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: 'white',
        }}>
        {arr.length > 0 ? (
          <FlatList
            data={arr}
            renderItem={renderUI}
            keyExtractor={item => `${item.id}`}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>No flights available</Text>
          </View>
        )}
      </View>
    </Container>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderStyle: 'dotted',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
  },
});
