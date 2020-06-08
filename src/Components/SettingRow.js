import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../stylesheets/Components/SettingRow';
function SettingRow({name, value, disabled = false}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.valueContainer}>
        {!disabled && (
          <>
            <Text style={styles.valueText}>{value}</Text>
            <Image
              source={require('../icons/arrow.png')}
              style={styles.arrowImage}
            />
          </>
        )}
        {disabled && (
          <View style={styles.proContainer}>
            <Text style={styles.proText}>PRO</Text>
          </View>
        )}
      </View>
    </View>
  );
}
export default SettingRow;
