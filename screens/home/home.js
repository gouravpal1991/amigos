import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  useWindowDimensions,
} from 'react-native';
import {List, Appbar, Checkbox, Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './home-styles';
import HorizontalDatePicker from '../common/react-native-horizontal-date-picker';

const onSelectedDay = (val) => {
  console.log(val);
};

const getToDoListItem = ({item}) => {
  return (
    <Card
      elevation={5}
      style={{
        margin: 15,
        borderRadius: 10,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card.Content>
        <View style={{justifyContent: 'center'}}>
          <Icon name={item.icon} size={60} color={'#EE6080'} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Roboto-Regular',
              fontSize: 18,
            }}>
            {item.title}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#EDEDED',
        alignSelf: 'center',
      }}
    />
  );
};

function Home(props) {
  const windowHeight = useWindowDimensions().height;
  const [expanded, setExpanded] = React.useState(true);
  const _goBack = () => console.log('Went back');
  const [checked, setChecked] = React.useState(false);
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  const handlePress = () => setExpanded(!expanded);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Checklist',
      isChecked: true,
      icon: 'list',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Guests',
      isChecked: false,
      icon: 'users',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ga',
      title: 'Budget',
      isChecked: true,
      icon: 'credit-card',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97h63',
      title: 'Vendors',
      isChecked: false,
      icon: 'id-card',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.gowed}>gowed</Text>
      <FlatList
        // stickyHeaderIndices={0}
        // ItemSeparatorComponent={FlatListItemSeparator}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={() => {
        //   return (
        //     <Text
        //       style={{
        //         padding: 20,
        //         fontFamily: 'Roboto-Bold',
        //         fontSize: 20,
        //       }}>
        //       {'Check List'}
        //     </Text>
        //   );
        // }}
        data={DATA}
        numColumns={2}
        renderItem={getToDoListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
