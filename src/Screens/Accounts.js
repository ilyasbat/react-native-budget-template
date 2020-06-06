import React, {useEffect} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../stylesheets/Screens/Accounts';
import colors from '../colors';
import MenuTab from '../Components/MenuTab';
import BalanceView from '../Components/BalanceView';
import HeaderRight from '../Components/HeaderRight';
function Accounts({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight />,
      headerLeft: () => (
        <Image source={require('../icons/settings.png')} style={styles.image} />
      ),
    });
  }, [navigation]);
  const data = [
    {
      name: 'Cash',
      amount: '$23 092.20',
      sign: '+',
    },
    {
      name: 'Credit Card',
      amount: '$532',
      sign: '-',
    },
    {
      name: "Wife's dredit card",
      amount: '$2 139',
      sign: '+',
    },
    {
      name: 'Bank deposit',
      amount: '$200 000',
      sign: '+',
    },
    {
      name: 'Car loan',
      amount: '$67 231',
      sign: '-',
    },
    {
      name: 'Home loan',
      amount: '$329 027',
      sign: '-',
    },
    {
      name: 'Mac Pro loan',
      amount: '$15 027',
      sign: '-',
    },
    {
      name: 'Freelance',
      amount: '$19 027',
      sign: '+',
    },
  ];
  return (
    <View style={styles.container}>
      <MenuTab />
      <BalanceView />

      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Cash')}>
            <View style={styles.itemContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
              <Text
                style={[
                  styles.amountText,
                  {
                    color:
                      item.sign === '-'
                        ? colors.primaryBackgroundColor
                        : colors.secondaryBackgroundColor,
                  },
                ]}>
                {item.sign === '-' ? '-' : null}
                {item.amount}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
}
export default Accounts;
