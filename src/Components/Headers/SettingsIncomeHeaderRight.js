import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../stylesheets/Components/Headers/SettingsIncomeHeaderRight';

function SettingsIncomeHeaderRight({title = 'Save'}) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
export default SettingsIncomeHeaderRight;
