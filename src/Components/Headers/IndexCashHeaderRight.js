import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from '../../stylesheets/Screens/Accounts';
import colors from '../../colors';

function IndexCashHeaderRight({navigation}) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        source={require('../../icons/search.png')}
        style={styles.imageNoHorizontalMargin}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Add', {
            title: 'Expense',
            color: colors.primaryBackgroundColor,
          });
        }}>
        <Image source={require('../../icons/plus.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
export default IndexCashHeaderRight;
