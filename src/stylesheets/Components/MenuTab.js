import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  menuTabContainer: {
    flex: 1,
    borderBottomColor: colors.primaryTintColor,
    borderBottomWidth: 0.5,
    maxHeight: 40,
    marginTop: 16,
  },
  menuTextsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 34,
  },
  menuText: {fontSize: 16, color: 'rgba(255,255,255,.7)', fontWeight: 'bold'},
  menuActiveText: {fontSize: 16, color: 'rgb(255,255,255)', fontWeight: 'bold'},
  menuActiveTextContainer: {
    borderBottomColor: colors.primaryTintColor,
    borderBottomWidth: 1.5,
  },
});
export default styles;
