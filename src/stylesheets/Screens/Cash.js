import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.secondaryBackgroundColor},
  flatlist: {
    marginTop: 5,
    flex: 1,
    backgroundColor: colors.primaryTintColor,
    marginHorizontal: 5,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
});
export default styles;
