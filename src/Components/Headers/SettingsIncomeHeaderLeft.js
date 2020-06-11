import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../stylesheets/Components/Headers/SettingsIncomeHeaderRight';

function SettingsIncomeHeaderLeft({title = 'Cancel', action}) {
  return (
    <TouchableOpacity onPress={() => action()}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default SettingsIncomeHeaderLeft;
